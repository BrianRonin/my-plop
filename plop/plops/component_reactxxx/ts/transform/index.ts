export default (x, t) => {
  let {
    prop_type,
    name_type,
    prop,
    import_props_component,
    import_all_styles,
  } = t.start
  // *** modify PROPS TYPES
  let doc = x.replace(
    /__propsType__/,
    t.state(
      '{\n\t' + 'children: React.ReactNode\n}',
      '{ ' + prop_type + ' }',
      '{\n\t' +
        'children: React.ReactNode\n\t' +
        prop_type +
        '\n}',
      '{\n\t' + '//\n}',
    ),
  )
  // *** modify ARG
  doc = doc.replace(
    /__props__/,
    t.state(
      '{ children }: ' + name_type,
      '{ ' + prop + ' }: ' + name_type,
      '{ children, ' + prop + ' }: ' + name_type,
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

  // *** ??importComponentAndType??
  doc = doc.replace(
    /__importComponentAndType__/,
    import_props_component,
  )
  doc = doc.replace(/__importStyles__/, import_all_styles)
  // doc = doc.replace(
  //   /teste/,
  //   t.hasMock ? 'tem test' : 'não tem test',
  // )
  return doc
}
