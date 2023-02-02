import filenames, { ResolveFiles } from './filenames'
import Transform from './template'

const getPaths = (
  whatIs: keyof Omit<ResolveFiles, 'folder'>,
  skip:
    | string
    | boolean
    | ((answers: Record<string, string>) => any),
) => {
  const name_folder =
    '{{ properCase name }}_{{ camelCase numbering }}'
  return {
    type: 'add',
    templateFile:
      'plop/plops/component_react/template/generator/' +
      whatIs +
      '.hbs',
    path: '{{ group }}'
      ? `src/components/{{ properCase group }}/${name_folder}/` +
        filenames[whatIs]('')
      : `./src/components/${name_folder}/` +
        filenames[whatIs]('na' + 'me'), //diretorio destiono
    transform: (doc: string) => Transform[whatIs](doc),
    skip: (answers: Record<string, string>) => {
      if (typeof skip === 'boolean') return skip
      if (typeof skip === 'string')
        return answers[skip] ? false : '-SKIP ' + whatIs
      return skip(answers)
    },
  }
}

const resolve = [
  {
    ...getPaths('index', 'has_index'),
  },
  {
    ...getPaths('mock', 'has_mock'),
  },
  {
    ...getPaths('stories', 'has_stories'),
  },
  {
    ...getPaths('styles', 'has_styles'),
  },
  {
    ...getPaths('test', 'has_test'),
  },
  {
    ...getPaths('types', 'has_types'),
  },
]

export default resolve
