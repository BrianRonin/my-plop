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
      'plop/generator/template/generator/' +
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

const getMany = (type: keyof typeof filenames) => {
  const handleBars = ', , , , , , , , , , , , , , , , , , ,'
  const y = handleBars
  const x = y
  return x.split(',').map((file, i) => {
    return {
      ...getPaths(
        //@ts-ignore
        type,
        (answers: any) =>
          answers['_' + i + '_'] ? false : '--',
        `template/${type}/`,
        `_${i.toString()}_`,
      ),
    }
  })
}

const resolve = [
  {
    ...getPaths('actions', () => false),
  },
  {
    ...getPaths('filenames', () => false),
  },
  {
    ...getPaths('prompts', () => false),
  },
  {
    ...getPaths('settings', () => false),
  },
  {
    ...getPaths('template', () => false),
  },
  ...getMany('generator'),
  ...getMany('transform'),
]

export default resolve
