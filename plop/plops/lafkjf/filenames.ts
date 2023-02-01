import _cases from '../../utils/cases'

const myFiles = {
	alfkj: '{{ snakeCase __ }}',
}

const cases = _cases('__', myFiles)

const cases_without_extension = Object.keys(cases).reduce(
  (p, k) => {
    const str = cases[k]().replace(/}}\.[^\s]*/g, '}}')
    return { ...p, ['_' + k]: str }
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