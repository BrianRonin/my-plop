// export class CaseModifiers {
//   constructor(str) {
//     this.str = str
//   }
//   get snakeCase() {
//     return case_modifiers['snakeCase'](this.str)
//   }
//   get properCase() {
//     return case_modifiers['properCase'](this.str)
//   }
//   get camelCase() {
//     return case_modifiers['camelCase'](this.str)
//   }
// }

const cleanStr = (str: string) => {
  const _str = str.replace(/[^\w\s]/g, '')
  const _strMatch = _str.match(
    /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g,
  )
  return _strMatch
}

export default {
  camelCase: (text: string) => {
    function camelize_(text: string) {
      text = text.replace(/[-_\s.]+(.)?/g, (_, c) =>
        c ? c.toUpperCase() : ``,
      )
      return (
        text.substring(0, 1).toLowerCase() +
        text.substring(1)
      )
    }
    text = text
      .replace(/[^\w\s]/g, '')
      .replace(/[^a-zA-Z0-9$_\-\s.]/g, '')
      .replace(/^[0-9_\-\s.]+/, '')
    return camelize_(text)
  },
  clean: (str: string) => {
    const _str = cleanStr(str)
    const _strResolve =
      _str && _str.map((x) => x.toLowerCase()).join(' ')
    return _strResolve
  },
  snakeCase: (str: string) => {
    const _str = cleanStr(str)
    const _strResolve =
      _str && _str.map((x) => x.toLowerCase()).join('_')
    return _strResolve
  },
  constantCase: (str: string) => {
    const _str = cleanStr(str)
    const _strResolve =
      _str && _str.map((x) => x.toUpperCase()).join('_')
    return _strResolve
  },
  properCase: (str: string) => {
    return `${str}`
      .toLowerCase()
      .replace(/[-_]+/g, ' ')
      .replace(/[^\w\s]/g, '')
      .replace(
        /\s+(.)(\w*)/g,
        ($1, $2, $3) => `${$2.toUpperCase() + $3}`,
      )
      .replace(new RegExp(/\w/), (s) => s.toUpperCase())
  },
}
