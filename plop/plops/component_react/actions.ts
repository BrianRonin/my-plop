import filenames, { ResolveFiles } from './filenames'
import Transform from './template'

const getPaths = (
  whatIs: keyof Omit<ResolveFiles, 'folder'>,
  skip:
    | string
    | boolean
    | ((answers: Record<string, string>) => any),
) => {
  return {
    type: 'add',
    templateFile:
      'plop/plops/component_react/template/generator/' +
      whatIs +
      '.hbs',
    path:
      '{{ base_path }}/{{ group }}{{ properCase folder_name }}/' +
      filenames[whatIs]('na' + 'me'),
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
  {
    ...getPaths('presets', 'has_presets'),
  },
]

export default resolve
