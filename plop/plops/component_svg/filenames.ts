import _cases from '../../utils/cases'

const myFiles = {
  index: '{{ snakeCase name }}.tsx',
}

const cases = _cases('__', myFiles)

const cases_without_extension = Object.keys(cases).reduce(
  (p, k) => {
    const str = cases[k]().replace(/}}\.[^\s]*/g, '}}')
    const _str = cases[k]().replace(/\.[^\s]*/g, '')
    if (cases[k]().match('}}')) {
      return { ...p, ['_' + k]: str }
    } else {
      return { ...p, ['_' + k]: _str }
    }
  },
  {},
)

export type ResolveFiles = {
  [key in keyof typeof myFiles]: (name: string) => string
}

type ResolveFilesWhioutExtension = {
  [key in `_${keyof typeof myFiles}`]: (
    name: string,
  ) => string
}

export default {
  ...cases,
  ..._cases(cases_without_extension),
} as ResolveFiles & ResolveFilesWhioutExtension
