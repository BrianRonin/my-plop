import Transform from '../../template'

export default (x: string, t: typeof Transform) => {
  let { propsArg, propsType, Type } = t.start
  // *** modify PROPS TYPES
  let doc = x

  doc = x.replace(
    /__importTypeFile__/,
    t.Var.has_types ? `import * as T from './types'` : '',
  )

  doc = doc.replace(
    /__exportTypeFile__/,
    t.Var.has_types
      ? `export * as ${Type} from './types'`
      : '',
  )

  doc = doc.replace(
    /__propsType__/,
    t.Var.has_types
      ? ''
      : `export interface ${Type}` +
          t.state(
            '{\n\t' + 'children: React.ReactNode\n}',
            '{ ' + propsType + ' }',
            '{\n\t' +
              'children: React.ReactNode\n\t' +
              propsType +
              '\n}',
            '{\n\t' + '//\n}',
          ),
  )
  // *** modify ARG
  doc = doc.replace(
    /__props__/,
    t.state(
      '{ children }: ' + t.Var.has_types ? 'T.Props' : Type,
      '{ ' +
        propsArg +
        ' }: ' +
        (t.Var.has_types ? 'T.Props' : Type),
      '{ children, ' +
        propsArg +
        ' }: ' +
        (t.Var.has_types ? 'T.Props' : Type),
      '',
    ),
  )
  // *** modfy RETURN
  doc = doc.replace(
    /__return__/,
    t.state(
      '(\n\t\t<S.Main>\n\t\t\t{children}\n\t\t</S.Main>\n\t)',
      '(\n\t\t<S.Main></S.Main>\n\t)',
      '(\n\t\t<S.Main>\n\t\t\t{children}\n\t\t</S.Main>\n\t)',
      '(\n\t\t<S.Main></S.Main>\n\t)',
    ),
  )

  return doc
}
