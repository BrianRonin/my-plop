import {
  $Component,
  default_if_there_are_no_modifiers,
} from '../component_react/settings'
import { case_modifiers } from './case_modifiers'
import { check_case_modifiers } from './check_case_modifiers'
import { cleanInput } from './clean_input'

export const format_a_lot_in_each = (obj) => {
  const variables = new Variables()
  class Variables {
    constructor() {
      this.var = {}
      //? { key: [value = '' | [], isMany = bool, divisor = '' ]}
    }
    addvariables(key, value, isMany, divisor) {
      const _var = [value, isMany, divisor]
      this.var[key] = _var
    }
  }
  const match = new Match()

  class Match {
    constructor() {
      this.match = []
      //? { key: [match = '', value = '' ] }
    }
    addmatch(key, _match, value) {
      const match = [_match, value]
      this.match[key] = match
    }

    isMatch(key, _inputs, divisor) {
      const inputs = _inputs.split(divisor)
      const resolve = []
      inputs.map((_input) => {
        const input = cleanInput(_input)
        this.match[key].map((match) => {
          input.match(match[0])
            ? resolve.push(match[1])
            : resolve.push(input)
        })
      })
      return resolve
    }
  }

  Object.keys(obj.variables).forEach((key) => {
    const {
      divisor = ',',
      value = 'no value',
      isMany = false,
    } = obj.variables[key]
    variables.addvariables(key, value, isMany, divisor)
  })

  const config = (obj, key) => {
    let _var = false
    let _default = false
    let hasSpaces = false
    let hasMatch = false
    let divisor = ''
    let key_value

    if (obj.var) _var = obj.var
    if (obj.default) _default = obj.default
    if (obj.space) hasSpaces = true
    if (obj.match) {
      obj.match.map((_match) => {
        match.addmatch(key, _match[0], _match[1])
      })
      hasMatch = match.isMatch(key)
    }

    return { _var, hasMatch, hasSpaces, _default }
  }

  Object.keys(obj).forEach((key, i) => {
    if (key !== 'variables') {
      const { _var, hasMatch, hasSpaces, _default } =
        config(obj[key], key)
      let input = {}
      if (hasMatch) {
        hasMatch.map()
      }

      formater(input)
    }
  })

  const formater = (molde, input, match) => {
    let temp = {}
    let output = {}
    Object.keys(molde).forEach(function (key) {
      let hasModifier = false

      if (match) {
        match.map()
      }

      temp[key][1] = molde[key].replace(/{{.*}}/gi, '$')
      temp[key][2] = molde[key].replace(/{{.*}}/gi, '$')
      input.map
      temp[key][1] = temp[key][1].replace(
        '$',
        case_modifiers[temp[key][0]](input),
      )
    })
    return {
      props: ['start', 'beetwen', 'end'],
      propsComponenet: ['start', 'beetwen', 'end'],
    }
  }

  function spaces(
    index,
    maxLength,
    array,
    start,
    between,
    end,
    onlyOne,
  ) {
    return index === 0
      ? maxLength > 0
        ? array.push(start)
        : array.push(onlyOne)
      : maxLength === index + 1
      ? array.push(end)
      : array.push(between)
  }
}
