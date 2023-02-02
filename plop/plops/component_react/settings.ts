import { PlopConf } from '../../types/config.js'
import { Input } from './prompts.js'
import Cases from '../../utils/cases.js'
import file_name from './filenames'

// ! only support camelCase, snakeCase, properCase, constantCase
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

export default (var_: Input) => {
  const cases = {
    component: '{{ properCase __ }}',
    prop: '{{ camelCase __ }}',
  }

  type ResolveCases = {
    [key in keyof typeof cases]: (name: string) => string
  }

  const c = Cases('__', cases) as ResolveCases

  const Type = (x: string) =>
    `T${var_.numbering}${c.component(x)}`
  const Mock = (x: string) =>
    `M${var_.numbering}${c.component(x)}`
  const Component = (x: string) =>
    `C${var_.numbering}${c.component(x)}`
  const Style = (x: string) =>
    `S${var_.numbering}${c.component(x)}`

  const config = {
    // *** General
    Type: {
      input: [var_.name, 'name'],
      default: Type('name'),
    },
    Mock: {
      input: [var_.name, 'name'],
      default: Mock('name'),
    },
    Component: {
      input: [var_.name, 'name'],
      default: Component('name'),
    },
    Style: {
      input: [var_.name, 'name'],
      default: Style('name'),
    },
    // *** Index
    propsArg: {
      input: [var_.props.split(','), 'props'],
      default: c.prop('props'),
      match: [
        {
          key: '#',
          value: c.component('props'),
        },
      ],
      spaces: {
        start: '{{}}, ',
        between: '{{}}, ',
        end: '{{}}',
        onlyOne: '{{}}',
      },
    },
    propsType: {
      input: [var_.props.split(','), 'props'],
      default: c.prop('props') + ': any',
      match: [
        {
          key: /_/,
          stages: {
            stage_3: (x) => {
              return x.match(/\?/g)
                ? x
                : x.replace(':', '?:')
            },
          },
        },
        {
          key: /#/,
          value: `${c.component('props')}: ${Type(
            'props',
          )}`,
        },
      ],
      spaces: {
        start: '{{}}\n',
        between: '\t{{}}\n',
        end: '\t{{}}',
        onlyOne: '{{}}',
      },
    },
    // *** styles
    // *** mock
    mock: {
      input: [var_.props.split(','), 'props'],
      default: `// ${c.prop('props')}: `,
      match: [
        {
          key: '#',
          value: `// ${c.component('props')}: C`,
        },
      ],
      spaces: {
        start: '\n\t{{}}, \n',
        between: '\t{{}}, \n',
        end: '\t{{}},',
        onlyOne: '\n\t{{}}, \n',
      },
    },
    // *** stories && test
  } satisfies PlopConf['config']

  const css_in_js = ['Styled Components', 'Emotion']

  const custom = {
    css_in_js: css_in_js[1],
  }

  const resolve: PlopConf = {
    input: {
      name: var_.name,
      numbering: var_.numbering,
      group: var_.group,
    },
    custom,
    config,
  }

  //@ts-ignore
  return resolve as {
    [key in keyof typeof config]: string
  } & {
    custom: typeof custom
  }
}
