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
  return {
    type: 'add',
    templateFile:
      'plop/plops/component_svg/template/generator/' +
      whatIs +
      '.hbs',
    path:
      `src/svg/{{ group }}` +
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
    ...getPaths('index', false),
  },
]

export default resolve
