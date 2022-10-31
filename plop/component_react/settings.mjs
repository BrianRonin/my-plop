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

export default (var_) => {
  const prop_component_snakeCase = []
  return {
    custom: {
      prop_component_snakeCase: prop_component_snakeCase,
    },
    input: {
      name: var_.name,
      props: var_.props,
    },
    config: {
      // *** general
      proper_case_name: {
        input: [var_.name, 'name'],
        default: '{{ properCase name }}',
      },
      snake_case_name: {
        input: [var_.name, 'name'],
        default: '{{ snakeCase name }}',
      },
      // *** index
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
            stages: {
              stage_3: (x) => {
                return x.match(/\?/g)
                  ? x
                  : x.replace(':', '?:')
              },
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
        default: '// {{ camelCase props }}: any',
        match: [
          {
            key: '#',
            value:
              '{{ properCase props }}: {{ ...export_and_import_mock }}',
          },
        ],
        spaces: {
          start: '\n\t{{}}\n',
          between: '\t{{}}\n',
          end: '\t{{}}\n\t',
          onlyOne: '\t{{}}\n\t',
        },
      },
      import_props_component: {
        input: [var_.props.split(','), 'props'],
        match: [
          {
            key: '##',
            value:
              "import { {{ properCase props }}, {{ camelCase props }}Props } from '../{{ snakeCase props }}/{{ snakeCase props }}'",
          },
        ],
        spaces: {
          start: '\n{{}} \n',
          between: '{{}} \n',
          end: '{{}}',
          onlyOne: '{{}}',
        },
      },
      // *** styles
      prop_component: {
        input: [var_.props.split(','), 'props'],
        match: [
          {
            key: '#',
            value: "'{{ properCase props }}Props'",
          },
        ],
        spaces: {
          start: ', {{}}, ',
          between: '{{}}, ',
          end: '{{}} ',
          onlyOne: ', {{}}',
        },
      },
      type_styled: {
        input: [var_.name, 'name'],
        default:
          "type S_{{ camelCase name }}Props = Exclude<Pick<{{ camelCase name }}Props, 'children'{{ ...prop_component }}>, {{ camelCase name }}Props>",
        spaces: {
          start: '\n{{}}',
          between: '{{}}',
          end: '{{}}',
          onlyOne: '{{}}',
        },
      },
      // *** mock
      import_mock_prop_component: {
        input: [var_.props.split(','), 'props'],
        match: [
          {
            key: '##',
            value:
              "import { mock_{{ snakeCase props }} } from '../{{ snakeCase props }}/{{ snakeCase props }}'",
          },
        ],
        spaces: {
          start: '\n{{}} \n',
          between: '{{}} \n',
          end: '{{}}',
          onlyOne: '\n{{}} \n',
        },
      },
      mock: {
        input: [var_.props.split(','), 'props'],
        default: '// {{ camelCase props }}',
        match: [
          {
            key: '#',
            value:
              '// {{ properCase props }}Props: mock_{{ snakeCase props }}',
          },
          {
            key: '##',
            value:
              '{{ properCase props }}Props: mock_{{ snakeCase props }}',
          },
        ],
        spaces: {
          start: '\n\t{{}}, \n',
          between: '\t{{}}, \n',
          end: '\t{{}},',
          onlyOne: '\n\t{{}} \n,',
        },
      },
      // *** stories && test
      import_mock: {
        input: [var_.name, 'name'],
        default:
          "import { mock_{{ snakeCase name }} } from './M.{{ snakeCase name }}'",
        spaces: {
          start: '{{}} \n',
          between: '{{}} \n',
          end: '{{}}',
          onlyOne: '{{}} \n',
        },
      },
    },
  }
}

// * Styled component

// ? ex: div, h1, etc..
export const default_import_html_of_styled_components =
  'div'
