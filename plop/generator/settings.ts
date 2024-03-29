import { PlopConf } from 'plop/types/config'
import Cases from '../utils/cases'
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
    files: '{{ snakeCase __ }}',
    inputs: '{{ snakeCase __ }}',
    cases: '{{ snakeCase __ }}',
    transform_files: 'transform_{{ snakeCase __ }}',
  }

  type ResolveCases = {
    [key in keyof typeof cases]: (name: string) => string
  }

  const c = Cases('__', cases) as ResolveCases

  const config = {
    // ** Actions
    getPaths: {
      input: [var_.files.split(','), 'files'],
      default: `\n\t{\n\t\t...getPaths('${c.files(
        'files',
      )}', false)\n\t},`,
      spaces: {
        start: '{{}}',
        between: '{{}}',
        end: '{{}}',
        onlyOne: '{{}}',
      },
    },
    getPathsWithCustomize: {
      input: [var_.files.split(','), 'files'],
      default: `\n\t{\n\t\t...getPaths('${c.files(
        'files',
      )}', 'has_${c.files('files')}'),\n\t},`,
      spaces: {
        start: '{{}}',
        between: '{{}}',
        end: '{{}}',
        onlyOne: '{{}}',
      },
      match: [
        {
          stages: {
            stage_3(v) {
              return v.replace('*{*{*', '{{')
            },
          },
        },
      ],
    },
    // ** Filenames
    fileNames: {
      input: [var_.files.split(','), 'files'],
      default: `\n\t${c.files('files')}: '${c.files(
        'files',
      )}.ts',`,
      spaces: {
        start: `\n\tfolder: '{{ snakeCase __ }}',{{}}`,
        between: '{{}}',
        end: '{{}}',
        onlyOne: '{{}}',
      },
    },
    // ** Template
    importTransform: {
      input: [var_.files.split(','), 'files'],
      default: `\nimport ${c.transform_files(
        'files',
      )} from './template/transform/${c.files('files')}'`,
      spaces: {
        start: '{{}}',
        between: '{{}}',
        end: '{{}}',
        onlyOne: '{{}}',
      },
    },
    transform: {
      input: [var_.files.split(','), 'files'],
      default: `\tstatic ${c.files(
        'files',
      )}(doc: string) {\n\t\treturn ${c.transform_files(
        'files',
      )}(doc, Transform)\n\t}`,
      spaces: {
        start: '{{}}\n\n',
        between: '{{}}\n\n',
        end: '{{}}',
        onlyOne: '{{}}',
      },
    },
    inputsTransform: {
      input: [var_.inputs.split(','), 'inputs'],
      default: `\n\t\t${c.inputs('inputs')}: '',`,
      spaces: {
        start: '{{}}',
        between: '{{}}',
        end: '{{}}',
        onlyOne: '{{}}',
      },
    },
    hasInputs: {
      input: [var_.inputs.split(','), 'inputs'],
      default: `\n\t\thas_${c.inputs('inputs')}: false,`,
      spaces: {
        start: '{{}}',
        between: '{{}}',
        end: '{{}}',
        onlyOne: '{{}}',
      },
    },
    hasFileInputs: {
      input: [var_.files.split(','), 'files'],
      default: `\n\t\thas_${c.files('files')}: false,`,
      spaces: {
        between: '{{}}',
        end: '{{}}',
        onlyOne: '{{}}',
        start: '{{}}',
      },
    },
    // ** Settings
    cases: {
      input: [var_.inputs.split(','), 'inputs'],
      default: `\n\t\t${c.cases(
        'inputs',
      )}: '{{ snakeCase __ }}',`,
      spaces: {
        start: `\n\t\tname: '{{ snakeCase __ }}',{{}}`,
        between: '{{}}',
        end: '{{}}',
        onlyOne: `\n\t\tname: '{{ snakeCase __ }}',{{}}`,
      },
    },
    inputsSettings: {
      input: [var_.inputs.split(','), 'inputs'],
      default: `\n\t\t\t${c.inputs(
        'inputs',
      )}: var_.${c.inputs('inputs')},`,
      spaces: {
        start: '{{}}',
        between: '{{}}',
        end: '{{}}',
        onlyOne: '{{}}',
      },
    },
    commentsSettings: {
      input: [var_.files.split(','), 'files'],
      default: `\n\t\t\t// ** ${c.files('files')}`,
      spaces: {
        start: '{{}}',
        between: '{{}}',
        end: '{{}}',
        onlyOne: '{{}}',
      },
    },
    // ** Prompts
    inputsPrompt: {
      input: [var_.inputs.split(','), 'inputs'],
      default: `
  {
    type: 'input',
    name: '${c.inputs('inputs')}',
    message: '${c.inputs('inputs')}: ',
    filter: (input) => {
      Transform.Var.${c.inputs('inputs')} = input
      Transform.Var.has_${c.inputs('inputs')} = !!input
      return input
    },
  },`,
      spaces: {
        start: '{{}}',
        between: '{{}}',
        end: '{{}}',
        onlyOne: '{{}}',
      },
    },
    typesInput: {
      input: [var_.inputs.split(','), 'inputs'],
      default: `\t${c.inputs(
        'inputs',
      )}: string\n\thas_${c.inputs('inputs')}: boolean`,
      spaces: {
        start: '\n{{}}',
        between: '\n{{}}',
        end: '\n{{}}',
        onlyOne: '\n{{}}',
      },
      match: [
        {
          key: 'has',
          value: `\t${c.inputs('inputs')}: string`,
        },
      ],
    },
    // ? Customize files
    customize_files_choice_types: {
      input: [var_.files.split(','), 'files'],
      default: `\n\thas_${c.files('files')}: boolean`,
      spaces: {
        between: '{{}}',
        end: '{{}}',
        onlyOne: '{{}}',
        start: '{{}}',
      },
    },
    customize_files_choices: {
      input: [var_.files.split(','), 'files'],
      default: `\n\t'${c.files('files')}'`,
      spaces: {
        between: '{{}},',
        end: '{{}}',
        onlyOne: '{{}}',
        start: '{{}},',
      },
    },
    customize_files_filter: {
      input: [var_.files.split(','), 'files'],
      default: `
      if (input.indexOf('${c.files('files')}') > -1) {
        Transform.Var.has_${c.files('files')} = true
        answers.has_${c.files('files')} = 'true'
      }`,
      spaces: {
        between: '{{}}',
        end: '{{}}',
        onlyOne: '{{}}',
        start: '{{}}',
      },
    },
    customize_files: {
      input: [var_.files, 'name'],
      default: `
  {
    type: 'checkbox',
    message: 'Quais arquivos devem ser criados?',
    name: 'customizeFiles',
    choices: [{{ ...customize_files_choices }},
    ],
    filter: (input: string[], answers: Record<string, any>) => {
      {{ ...customize_files_filter }}
      return input
    },
  },
      `,
    },
  } satisfies PlopConf['config']

  const resolve: PlopConf = {
    custom: {
      //
    },
    input: {
      name: var_.name,
      files: var_.files,
      inputs: var_.inputs,
    },
    config,
  }

  //@ts-ignore
  return resolve as {
    [key in keyof typeof config]: string
  }
}
