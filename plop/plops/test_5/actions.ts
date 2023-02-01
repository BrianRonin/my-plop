import filenames, { ResolveFiles } from './filenames'
import Transform from './template'

const getPaths = (
  whatIs: keyof Omit<ResolveFiles, 'folder'>,
  skip: () => any,
  path = '',
  value = '',
) => {
  const name_folder = filenames.folder(
    'n_a_m_e'.replace(/_/g, ''),
  )
  return {
    type: 'add',
    templateFile:
      'plop/plops/$test_5/template/generator/' +
      whatIs +
      '.hbs',
    path:
      `plop/plops/${name_folder}/` +
      path +
      filenames[whatIs](value ? value : 'na' + 'me'), //diretorio destiono
    transform: (doc: string) => Transform[whatIs](doc),
    skip: skip,
  }
}

export default [
	{
		...getPaths('index', () => '{{ snakeCase files }}' ? false : true),
	},
	{
		...getPaths('styles', () => '{{ snakeCase files }}' ? false : true),
	},
	{
		...getPaths('mock', () => '{{ snakeCase files }}' ? false : true),
	},
]
