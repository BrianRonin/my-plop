import { var_components } from '../../plopfile.js'

export const mock_ = {
  variables: {
    name: {
      input: 'um componente',
      isMany: false,
    },
    props: {
      input: '_prop opcional, #prop component, prop normal',
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
    default: '{{ properCase name }}}',
    match: [{ key: '#', value: '{{ camelCase name }}' }],
  },
  export_and_impot_mock: {
    default: 'mock_{{ snakeCase name }}',
  },
  prop: {
    default: '{{ camelCase props }}',
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
      { key: '#', value: '{{ properCase props }}Props' },
      { key: '_', value: '{{}}?' },
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
          '{{ properCase props }}: {{ $export_and_impot_mock }}',
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
        value: '{{ properCase bola }}: {{ $mock }}',
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
