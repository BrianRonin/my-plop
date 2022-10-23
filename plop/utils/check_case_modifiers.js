import { default_if_there_are_no_modifiers } from '../component_react/settings.js'
import { case_modifiers } from '../utils/case_modifiers.js'
export function check_case_modifiers(
  obj,
  _match = [],
  ifNoMatch,
) {
  let resolve = {}
  Object.keys(obj).forEach(function (_key, index) {
    let isMany = false
    if (Array.isArray(obj[_key])) {
      isMany = true
      resolve[_key] = []
      obj[_key].forEach((match) => {
        check(match)
      })
    } else {
      check(_key)
    }
    function check(x) {
      let hasModifier = false
      _match.forEach((match, index) => {
        if (isMany) {
          if (x.match(match)) resolve[_key].push(match)
          hasModifier = true
        } else {
          if (obj[_key].match(match)) resolve[_key] = match
          hasModifier = true
        }
      })
      if (!hasModifier) {
        if (isMany) {
          resolve[_key].push(ifNoMatch)
        } else {
          resolve[_key] = ifNoMatch
        }
      }
    }
  })
  return resolve
}

const x = {
  nome: 'camelCase jfo;aeifha;elifhae;lihf;laih',
  sobrenome: 'properCase foa;eiyhfa;esjf;laesij',
  apelidos: [
    'apelido um camelCase',
    'apelido dois properCase',
    'apelido dois properCase',
  ],
}

console.log(
  check_case_modifiers(
    x,
    case_modifiers.options,
    default_if_there_are_no_modifiers,
  ),
)
