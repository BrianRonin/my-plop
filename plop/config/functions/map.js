import { checkout } from './checkout.js'
import { config } from './config.js'

export const map_plop = (obj, variables, match) => {
  const output = []
  Object.keys(obj).forEach((key) => {
    if (key !== 'variables') {
      const { _var, hasMatch, hasSpaces, _default } =
        config(obj[key], key)
      const { _variables, _modifiers } = checkout(
        'default',
        obj,
        key,
        variables,
      )
      if (hasMatch) {
        const {
          keys: M_keys,
          _variables: M_variables,
          _modifiers: M_modifiers,
          isIncrement,
        } = checkout('match', obj, key, variables, true)
        match.addmatch({
          key,
          match: M_keys,
          variable: M_variables,
          modifier: M_modifiers,
          isIncrement,
        })
      }
      output.push({
        [key]: match.Match(
          key,
          {
            value: Object.values(_variables)[0],
            modifier: Object.values(_modifiers)[0],
          },
          variables,
        ),
      })
    }
  })
  // console.log('___________XXXX_____________')
  // console.log(output)
  return output
}
