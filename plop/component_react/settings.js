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

// ************* COMPONENTS ****************** //

export const plop_config_components = (var_) => {
  return {
    input: {
      name: var_.name,
      props: var_.props,
    },
    config: {
      name_type: {
        input: [var_.name, 'name'],
        default: '{{ camelCase name }}Props',
      },
      name_component: {
        input: [var_.name, 'name'],
        default: '{{ properCase name }}',
      },
      export_and_import_mock: {
        input: [var_.name, 'name'],
        default: 'mock_{{ snakeCase name }}',
      },
      prop: {
        input: [var_.props.split(','), 'props'],
        default: '{{ camelCase props }}',
        match: [
          {
            key: '#',
            value: '{{ properCase props }}Props',
          },
        ],
        spaces: {
          start: '{{}}, ',
          between: '{{}}, ',
          end: '{{}}',
          onlyOne: '{{}}t',
        },
      },
      prop_type: {
        input: [var_.props.split(','), 'props'],
        default: '{{ camelCase props }}: any',
        match: [
          {
            key: '_',
            value: (x) => {
              return x.match(/\?/g)
                ? x
                : x.replace(':', '?:')
            },
          },
          {
            key: '#',
            value:
              '{{ properCase props }}Props: {{ camelCase props }}Props',
          },
        ],
        spaces: {
          start: '\n\t{{}}\n',
          between: '\t{{}}\n',
          end: '\t{{}}\n\t',
          onlyOne: '\t{{}}\n\t',
        },
      },
      prop_mock: {
        input: [var_.props.split(','), 'props'],
        default: '// {{ camelCase props }}',
        match: [
          {
            key: '#',
            value:
              '{{ properCase props }}: {{ ...export_and_import_mock }}',
          },
        ],
        spaces: {
          start: '\n\t{{}}: any\n',
          between: '\t{{}}: any\n',
          end: '\t{{}}: any\n\t',
          onlyOne: '\t{{}}: any\n\t',
        },
      },
    },
  }
}

// * Styled component

// ? ex: div, h1, etc..
export const default_import_html_of_styled_components =
  'div'
