import { case_modifiers } from '../../utils/case_modifiers.js'
export const formater_plop = (_molde, variables) => {
  let output = {}
  _molde.forEach((molde) => {
    Object.keys(molde).forEach((key, index) => {
      const isMany = Array.isArray(molde[key].value)
      return isMany ? format() : 'fsfsf'
    })
  })
  return output
}

const format = (molde, key, variables) => {
  let output
  molde[key].value.reduce((prev, value, index) => {
    const input = variables.inputClean(value)
    output[key] = input.reduce((prev, input, index) => {
      const hasIncrement = molde[key].increment[index]
      let resolve = input.replace(
        /{{[^$.*]*}}/gi,
        case_modifiers[molde[key].modifier[index]](input),
      )
      console.log(resolve)
      if (hasIncrement) {
        resolve = molde[key].increment[index].replace(
          '{{}}',
          resolve,
        )
      }
      return [...prev, resolve]
    }, [])
  })
}

// {
//     props: ['start', 'beetwen', 'end'],
//     propsComponenet: ['start', 'beetwen', 'end'],
//   }
