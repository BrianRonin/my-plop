import _cases from '../utils/cases'

const myFiles = {
  folder: '{{ snakeCase __ }}',
  actions: 'actions.ts',
  filenames: 'filenames.ts',
  prompts: 'prompts.ts',
  settings: 'settings.ts',
  template: 'template.ts',
  generator: '{{ snakeCase __ }}.hbs',
  transform: '{{ snakeCase __ }}.ts',
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

// console.log(cases.mock())
// console.log(cases.styles())
// console.log(cases.stories())
// console.log(_cases(cases_without_extension)._mock())
// console.log(_cases(cases_without_extension)._styles())
// console.log(_cases(cases_without_extension)._stories())
