import _cases from '../utils/cases.mjs'

const cases = _cases('__', {
	index: '{{ snakeCase __ }}',
	styles: '{{ snakeCase __ }}',
	mock: '{{ snakeCase __ }}',
})

const cases_without_extension = Object.keys(cases).reduce(
  (p, k) => {
    const str = cases[k]().replace(/}}\.[^\s]*/g, '}}')
    return { ...p, ['_' + k]: str }
  },
  {},
)

export default {
  ...cases,
  ..._cases(cases_without_extension),
}