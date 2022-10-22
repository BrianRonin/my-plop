import { var_components } from '../../plopfile.js'
import { case_modifiers } from './caseModifiers.js'

export const formater = (input) => {
  let output = {}
  Object.keys(input).forEach(function (
    key,
    index,
  ) {
    let hasModifier = false
    output[key] = []
    if (input[key].match('camelCase')) {
      output[key][0] = 'camelCase'
      hasModifier = true
    }
    if (input[key].match('properCase')) {
      output[key][0] = 'properCase'
      hasModifier = true
    }
    if (input[key].match('snakeCase')) {
      output[key][0] = 'snakeCase'
      hasModifier = true
    }
    if (input[key].match('constantCase')) {
      output[key][0] = 'constantCase'
      hasModifier = true
    }
    if (!hasModifier) {
      output[key][0] = 'properCase'
      hasModifier = true
    }
    output[key][1] = input[key].replace(
      /{{.*}}/gi,
      '$',
    )
    output[key][2] = input[key].replace(
      /{{.*}}/gi,
      '$',
    )
    output[key][1] = output[key][1].replace(
      '$',
      case_modifiers[output[key][0]](
        var_components.name,
      ),
    )
  })
  return output
}
