import case_modifiers from '../utils/case_modifiers'
import format_hooks from './format_hooks.js'
import plop_config_components from '../plops/component_react/settings.js'
import handle_spaces from '../utils/handle_spaces'
import { PlopConf, PlopVariable } from '../types/config'

export default function build_my_plop(obj: PlopConf) {
  const single_inputs: Record<string, string> = {}
  Object.keys(obj.input).forEach((input: string) => {
    if (!Array.isArray(obj.input[input])) {
      single_inputs[input] = obj.input[input]
    }
  })

  type Resolve = { custom?: any } & Record<
    string,
    string | string[]
  >
  const resolve: Resolve = format_hooks(
    _formater(obj.config, single_inputs),
  )
  obj.custom && (resolve.custom = obj.custom)
  return resolve
}
// build_my_plop(
//   plop_config_components({
//     name: 'componente novo',
//     props:
//       '_@prop opcional, #prop component, prop normal, _##@prop opcional component importado, ##prop importada',
//   }),
// )

function _formater(
  obj: PlopConf['config'],
  single_inputs: Record<string, string>,
) {
  const resolve: { custom?: any } & Record<string, string> =
    {}
  Object.keys(obj).forEach((k) => {
    /**
     * Se a variavel for um array
     */
    if (Array.isArray(obj[k].input[0])) {
      let outputs: string[] = []
      const variables = obj[k].input[0] as string[]
      variables.map((_input, index) => {
        const _output = formater(
          {
            ...obj[k],
            input: _input,
          },
          {
            ...single_inputs,
            [obj[k].input[1]]: _input,
          },
        )
        _output && outputs.push(_output)
      })
      resolve[k] =
        outputs.length > 0
          ? outputs
              .reduce<string[]>((prev, output, index) => {
                const resolve = handle_spaces(
                  index,
                  outputs.length,
                  outputs,
                  obj[k].spaces!.start.replace(
                    /{{}}/,
                    output,
                  ),
                  obj[k].spaces!.between.replace(
                    /{{}}/,
                    output,
                  ),
                  obj[k].spaces!.end.replace(
                    /{{}}/,
                    output,
                  ),
                  obj[k].spaces!.onlyOne.replace(
                    /{{}}/,
                    output,
                  ),
                )
                return [...prev, resolve]
              }, [])
              .join('')
          : ''
    } else {
      resolve[k] = formater(
        {
          ...obj[k],
          input: obj[k].input[0] as string,
        },
        single_inputs,
      )
    }
  })
  obj.custom && (resolve.custom = obj.custom)
  return resolve
}

function formater(
  obj: { input: string } & Omit<PlopVariable, 'input'>,
  inputs: Record<string, string>,
) {
  let resolve: string
  let stages = {
    stage_0: (x: string) => x,
    stage_1: (x: string) => x,
    stage_2: (x: string) => x,
    stage_3: (x: string) => x,
  }
  let keys_of_match = []
  resolve = obj.default ?? ''
  obj.match &&
    obj.match.map((match) => {
      keys_of_match.push(match.key)
      if (obj.input.match(match.key)) {
        match.value &&
          typeof match.value === 'string' &&
          (resolve = match.value)
        match.stages &&
          (stages = {
            ...stages,
            ...match.stages,
          })
      }
    })
  Object.keys(inputs).forEach((input) => {
    for (const [modifier, func] of Object.entries(
      case_modifiers,
    )) {
      const regex = new RegExp(
        `{{ ${modifier} ${input} }}`,
        'g',
      )
      if (resolve.match(regex)) {
        const output = stages.stage_2(
          func(
            stages.stage_1(stages.stage_0(inputs[input])),
          ) as string,
        )
        resolve = stages.stage_3(
          resolve.replace(regex, output),
        )
      }
    }
  })
  return resolve
}
