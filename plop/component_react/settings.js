import { var_components } from '../../plopfile.js'
import { formater_each } from '../utils/format_each.js'

// ! only support camelCase, snakeCase, properCase
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

/***
 * ? by default if there are no modifiers the name
 * ? will be in properCase and you can also modify
 * ? this in "options for default"
 * */

// ************* COMPONENTS ****************** //

const _userVariables = {
  name_component: '{{ properCase }}', //! important starts with capital letter
  export_and_import_mock: 'mock_{{ snakeCase }}',
  prop: '{{ camelCase }}',
  prop_component: '{{ properCase }}Props',
  type_of_component: '{{ camelCase }}Props',
}

// *** Filenames //

//? don't forget the backlinks .ts/.js
const _fileNames = {
  index: '{{ snakeCase }}.tsx',
  styles: 'S.{{ snakeCase }}.tsx',
  storybook: '{{ snakeCase }}.stories.tsx',
  test: '{{ snakeCase }}.test.tsx',
  mock: 'M.{{ snakeCase }}.tsx',
}

// *** Options for default ***
// ? "false" ==> choose ?

// * Styled component

// ? ex: div, h1, etc..
export const default_import_html_of_styled_components =
  'div'
// ? here is the modifier name without {{ }}
export const default_if_there_are_no_modifiers =
  'properCase'

// * $ options to create $ * //

export const $propComponent = '#' //? create a prop as component prop
export const $propOptional = '_' //? create a prop as optional

// ***** __ IGNORE __  ***** //
export const fileNames = formater_each(
  _fileNames,
  var_components.name,
)
export const userVariables = {
  ...formater_each(
    {
      nameComponent: _userVariables.name_component,
      export_and_import_mock:
        _userVariables.export_and_import_mock,
    },
    var_components.name,
  ),
}
export const $Component = new RegExp(
  `[^${$propComponent}${$propOptional} ]`,
)

console.log(userVariables)
