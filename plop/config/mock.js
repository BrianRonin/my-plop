import { var_components } from '../../plopfile.js'
// ! can only match with just one increment, one modifier, and one value
// ! '$' <== match reserved
// ? increment ===> -- {{}} --
export const mock_ = {
  variables: {
    name: {
      input: '#um componente',
      isMany: false,
    },
    props: {
      input:
        '_prop opcional, #prop component, prop normal, _#prop opcional e component',
      divisor: ',',
      isMany: true,
    },
    bola: {
      input: 'bola, bola1, #bola2, bola3',
      divisor: ',',
      isMany: true,
    },
  },
  name_component: { default: '{{ properCase name }}}' },
  title: {
    default: '{{ camelCase name }}}',
    match: [
      {
        key: '#',
        value:
          '{{ camelCase name }} {{ -export_and_import_mock }}',
      },
    ],
  },
  export_and_import_mock: {
    default: 'mock_{{ snakeCase name }}',
  },
  prop: {
    default: '{{ camelCase props }} {{ -prop_type }}',
    match: [
      { key: '#', value: '{{ properCase props }}Props' },
    ],
    spaces: {
      start: '{{}}, ',
      between: '{{}}, ',
      end: '{{}}',
      onlyOne: '{{}}',
    },
  },
  prop_type: {
    default: '{{ camelCase props }}',
    match: [
      { key: '_', value: '{{}}?' },
      { key: '#', value: '{{ properCase props }}Props' },
    ],
    spaces: {
      start: '\n\t{{}}: any\n',
      between: '\t{{}}: any\n',
      end: '\t{{}}: any\n\t',
      onlyOne: '\t{{}}: any\n\t',
    },
  },
  prop_mock: {
    default: '// {{ camelCase props }}',
    match: [
      {
        key: '#',
        value:
          '{{ properCase props }}: {{ -export_and_import_mock }}',
      },
    ],
    spaces: {
      start: '\n\t{{}}: any\n',
      between: '\t{{}}: any\n',
      end: '\t{{}}: any\n\t',
      onlyOne: '\t{{}}: any\n\t',
    },
  },
  bola: {
    default: '// {{ camelCase bola }}',
    match: [
      {
        key: '#',
        value:
          '{{ properCase bola }}: {{ -export_and_import_mock }}',
      },
    ],
    spaces: {
      start: '\n\t{{}}: any\n',
      between: '\t{{}}: any\n',
      end: '\t{{}}: any\n\t',
      onlyOne: '\t{{}}: any\n\t',
    },
  },
}
