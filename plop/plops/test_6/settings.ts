import { PlopConf } from '../../types/config'
import Cases from '../../utils/cases'
import { Input } from './prompts'

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
    name: '{{ snakeCase __ }}',
    props: '{{ snakeCase __ }}',
    colors: '{{ snakeCase __ }}',
  }

  type ResolveCases = {
    [key in keyof typeof cases]: (name: string) => string
  }

  const c = Cases('__', cases) as ResolveCases

  const config = {
    // ** index
    test: {
      input: [var_.colors, 'colors'],
      default: c.colors('colors'),
    },
    // ** styles
    // ** types
  } satisfies PlopConf['config']

  const resolve: PlopConf = {
    custom: {},
    input: {
      name: var_.name,
      props: var_.props,
      colors: var_.colors,
    },
    config,
  }

  //@ts-ignore
  return resolve as {
    [key in keyof typeof config]: string
  }
}
