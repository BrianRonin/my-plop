import { PlopConf } from '../../types/config.js'
import Cases from '../../utils/cases.js'
import { Input } from './prompts.js'

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
		mocks: '{{ snakeCase __ }}',
  }

  type ResolveCases = {
    [key in keyof typeof cases]: (name: string) => string
  }

  const c = Cases('__', cases) as ResolveCases

  const config = {
			// ** index
			// ** styles
  }

  const resolve: PlopConf = {
    custom: {},
    input: {
      name: var_.name,
			props: var_.props,
			mocks: var_.mocks,
    },
    config,
  }

  //@ts-ignore
  return resolve as {
    [key in keyof typeof config]: string
  }
}
