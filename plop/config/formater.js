import { handle_spaces } from '../_legacy/functions/handle_spaces.js'
import { case_modifiers } from '../utils/case_modifiers.js'
import { cleanInput } from '../utils/clean_input.js'
import { format_hooks } from './format_hooks.js'

// const inputs = {
//   name: '_#meu nome',
//   title: 'titulo qualquer',
//   props: [
//     'propNormal',
//     '_propOpcional',
//     '#propComponent',
//     '_#propOpcionalComponent',
//   ],
// }

// // const array_inputs = {}

// const obj = {
//   name_component: {
//     input: [inputs.name, 'name'],
//     default:
//       '{{ camelCase name }} xxx {{ camelCase title }}',
//     match: [
//       {
//         key: '_',
//         value:
//           '{{ camelCase name }} yyy {{ camelCase title }}',
//       },
//       {
//         key: '#',
//         value: (x) => x.replace('yyy', ':D'),
//       },
//     ],
//   },
//   export_and_import_mock: {
//     input: [inputs.name, 'name'],
//     default: 'mock_{{ snakeCase name }}',
//   },
//   prop_mock: {
//     input: [inputs.props, 'props'],
//     default: '// {{ camelCase props }}',
//     match: [
//       {
//         key: '#',
//         value:
//           '{{ properCase props }}: {{ ...export_and_import_mock }}',
//       },
//     ],
//     spaces: {
//       start: '\n\t{{}}: any\n',
//       between: '\t{{}}: any\n',
//       end: '\t{{}}: any\n\t',
//       onlyOne: '\t{{}}: any\n\t',
//     },
//   },
//   prop: {
//     input: [inputs.props, 'props'],
//     spaces: {
//       start: 'inicial_{{}}, ',
//       between: 'meio_{{}}, ',
//       end: 'fim_{{}}',
//       onlyOne: 'only_{{}}',
//     },
//     default:
//       '{{ camelCase props }}: {{ properCase props }}',
//     match: [
//       {
//         key: '_',
//         value: '{{ snakeCase props }}:',
//       },
//       {
//         key: '#',
//         value: (x) => {
//           return x.match(/\?/g) ? x : x.replace(':', '?:')
//         },
//       },
//     ],
//   },
// }

export const build_my_plop = (obj) => {
  const single_inputs = {}
  Object.keys(obj.input).forEach((input) => {
    if (!Array.isArray(obj.input[input])) {
      single_inputs[input] = obj.input[input]
    }
  })
  return format_hooks(_formater(obj.config, single_inputs))
}

function _formater(obj, single_inputs) {
  const resolve = {}
  Object.keys(obj).forEach((k) => {
    if (Array.isArray(obj[k].input[0])) {
      const output = []
      obj[k].input[0].map((_input, index) => {
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
        handle_spaces(
          index,
          obj[k].input[0].length,
          output,
          obj[k].spaces.start.replace(/{{}}/, _output),
          obj[k].spaces.between.replace(/{{}}/, _output),
          obj[k].spaces.end.replace(/{{}}/, _output),
          obj[k].spaces.onlyOne.replace(/{{}}/, _output),
        )
      })
      resolve[k] = output.join('')
    } else {
      resolve[k] = formater(
        {
          ...obj[k],
          input: obj[k].input[0],
        },
        single_inputs,
      )
    }
  })
  return resolve
}

function formater(obj, inputs) {
  let resolve
  let increment = (x) => x
  if (obj.default && typeof obj.default === 'string') {
    resolve = obj.default
    obj.match &&
      obj.match.map((match) => {
        if (obj.input.match(match.key)) {
          typeof match.value === 'string'
            ? (resolve = match.value)
            : (increment = match.value)
        }
      })
    Object.keys(inputs).forEach((input) => {
      case_modifiers.options.map((modifier) => {
        const regex = new RegExp(
          `{{ ${modifier} ${input} }}`,
          'g',
        )
        resolve.match(regex) &&
          (resolve = increment(
            resolve.replace(
              regex,
              case_modifiers[modifier](
                cleanInput(inputs[input]),
              ),
            ),
          ))
      })
    })
  } else {
    console.log(
      'obj.default não é uma string | obj.default isnt a string',
    )
  }
  return resolve
}
