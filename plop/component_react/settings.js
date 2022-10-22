import { formater } from '../utils/formater.js'

//*  camelCase: changeFormatToThis
//*  snakeCase: change_format_to_this
//*  dashCase: change-format-to-this
//*  dotCase: change.format.to.this
//*  pathCase: change/format/to/this
//*  properCase: ChangeFormatToThis
//*  lowerCase: change format to this
//*  sentenceCase: Change Format To this
//*  constantCase: CHANGE_FORMAT_TO_THIS
//*  titleCase: Change Format To This

// ? use some of case modifiers
// ? get name {{ name }} get name with modifier {{ MODIFIER name }}
// ? EX: {{ camelCase name }}, {{ properCase name }}

// ************* COMPONENTS ****************
// ! only support camelCase, snakeCase, properCase
export const _userVariables = {
  nameComponent: '{{ properCase name }}', //! important starts with capital letter
  mock: 'mock_{{ snakeCase name }}',
  prop: '{{ camelCase name }}',
  propComponent: '{{ properCase name }}Props',
  typeOfComponent: '{{ camelCase name }}Props',
}

// *** Filename
//? don't forget the backlinks .ts/.js

export const _fileNames = {
  index: '{{ snakeCase name }}.tsx',
  styles: 'S.{{ snakeCase name }}.tsx',
  storybook: '{{ snakeCase name}}.stories.tsx',
  test: '{{ snakeCase name}}.test.tsx',
  mock: 'M.{{ snakeCase name }}.tsx',
}

// *** Options for default ***
// ? "false" ==> choose ?

// * Styled component
// ? ex: div, h1, etc..
const default_import_html_of_styled_components =
  'div'

// * $ options to create $ * //
export const $propComponent = '#' //? create a prop as component prop
export const $propOptional = '_' //? create a prop as optional

// ***** __ IGNORE __  ***** //
export const fileNames = formater(_fileNames)
export const userVariables = formater(
  _userVariables,
)
export const $Component = new RegExp(
  `[^${$propComponent}${$propOptional} ]`,
)
