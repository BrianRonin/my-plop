export const transformComponent_index = (x, transform) => {
  const { prop_type, name_type, prop } = transform.start
  // *** modify PROPS TYPES
  let doc = x.replace(
    /\?\?propsType\?\?/,
    transform.state(
      '\n\t' + 'children: React.ReactNode',
      prop_type,
      '\n\t' + 'children: React.ReactNode' + prop_type,
      '\n\t' + '//',
    ),
  )
  // *** modify ARG
  doc = doc.replace(
    /\?\?props\?\?/,
    transform.state(
      '{ children }: ' + name_type,
      '{ ' + prop + ' }: ' + name_type,
      '{ children, ' + prop + ' }: ' + name_type,
      '',
    ),
  )
  // *** modfy RETURN
  doc = doc.replace(
    /\?\?return\?\?/,
    transform.state(
      '(\n\t\t<S.Main>\n\t\t\t{children}\n\t\t</S.Main>\n\t)',
      '(\n\t\t<S.Main>\n\t\t\t//\n\t\t</S.Main>\n\t)',
      '(\n\t\t<S.Main>\n\t\t\t{children}\n\t\t</S.Main>\n\t)',
      '(\n\t\t<S.Main>\n\t\t\t//\n\t\t</S.Main>\n\t)',
    ),
  )

  // *** ??importComponentAndType??
  doc = doc.replace(
    /\?\?importComponentAndType\?\?/,
    transform.var.hasPropComponent ? '\nimport {  }' : '',
  )
  return doc
}
