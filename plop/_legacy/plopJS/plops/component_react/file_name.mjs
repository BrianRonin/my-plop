import _cases from '../../utils/cases.mjs'

const cases = _cases('__', {
  folder: '{{ snakeCase __ }}',
  index: 'index.tsx',
  stories: 'stories.tsx',
  styles: 'styles.tsx',
  mock: 'mock.tsx',
  test: 'test.tsx',
})

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

export default {
  ...cases,
  ..._cases(cases_without_extension),
}

// console.log(cases.mock())
// console.log(cases.styles())
// console.log(cases.stories())
// console.log(_cases(cases_without_extension)._mock())
// console.log(_cases(cases_without_extension)._styles())
// console.log(_cases(cases_without_extension)._stories())
