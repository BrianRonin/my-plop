import { var_components } from '../../../plopfile'
import { format_a_lot_in_each } from '../../utils/format_a_lot_In_each'
import { formater_each } from '../../utils/format_each'
//? variables[*][2] = is one or is many?
const molde = {
  variables: {
    name: {
      value: var_components.name,
      isMany: false,
    },
    props: {
      value: var_components.props,
      divisor: ',',
      isMany: true,
    },
  },
  name_component: { default: '{{ properCase name }}}' },
  export_and_impot_mock: {
    default: 'mock_{{ snakeCase name }}',
    var: 'mock',
  },
  prop: {
    default: '{{ camelCase props }}',
    match: [['#', '{{ properCase props }}Props']],
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
      ['#', '{{ properCase props }}Props'],
      ['_', '{{}}?'],
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
    match: [['#', '{{ properCase props }}: {{ $mock }}']],
    spaces: {
      start: '\n\t{{}}: any\n',
      between: '\t{{}}: any\n',
      end: '\t{{}}: any\n\t',
      onlyOne: '\t{{}}: any\n\t',
    },
  },
}

const output = {
  name_component: '',
  prop: ['\nformatado, ', 'formatado, ', 'formatado'],
}
const y = {}
