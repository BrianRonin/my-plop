import filenames, { ResolveFiles } from './filenames'
import Transform from './template'

const getPaths = (
  whatIs: keyof Omit<ResolveFiles, 'folder'>,
  skip:
    | string
    | boolean
    | ((answers: Record<string, string>) => any),
  path = '',
  value = '',
) => {
  const name_folder = filenames.folder(
    'n_a_m_e'.replace(/_/g, ''),
  )
  return {
    type: 'add',
    templateFile:
      'plop/plops/$test_7/template/generator/' +
      whatIs +
      '.hbs',
    path:
      `plop/plops/${name_folder}/` +
      path +
      filenames[whatIs](value ? value : 'na' + 'me'), //diretorio destiono
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
    ...getPaths('styles', 'has_styles'),
  },
  {
    ...getPaths('mock', 'has_mock'),
  },
]

export default resolve
