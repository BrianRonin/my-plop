import { default_if_there_are_no_modifiers } from '../../component_react/settings.js'
import { case_modifiers } from '../../utils/case_modifiers.js'
import { _check } from '../../utils/check.js'

let keys_of_variables
let keys_and_isMany

export const checkout = (
  check,
  obj,
  key,
  variables,
  isMatch,
) => {
  keys_of_variables = Object.keys(variables.variables)
  const resolve = isMatch
    ? obj[key][check].reduce(
        (p, c, i) => {
          const { _modifiers, _variables } = _check_(
            {
              [c.key]: c.value,
            },
            false,
          )
          return {
            keys: [...p.keys, c.key],
            isIncrement: [
              ...p.isIncrement,
              c.value.match('{{}}') ? c.value : false,
            ],
            _variables: Object.values({
              ...p['_variables'],
              ..._variables,
            }),
            _modifiers: Object.values({
              ...p['_modifiers'],
              ..._modifiers,
            }),
          }
        },
        {
          keys: [],
          isIncrement: [],
          _variables: [],
          _modifiers: [],
        },
      )
    : _check_(
        { [key]: obj[key][check] },
        default_if_there_are_no_modifiers,
      )
  return resolve
}

const _check_ = (obj, _default_) => {
  let _variables = _check(
    obj,
    {
      match: keys_of_variables,
      resolve: keys_of_variables,
    },
    false,
    '{{.* __match__ .*}}',
  )
  let _modifiers = _check(
    obj,
    {
      match: case_modifiers.options,
      resolve: case_modifiers.options,
    },
    _default_,
    '{{.* __match__ .*}}',
  )
  return { _variables, _modifiers }
}
