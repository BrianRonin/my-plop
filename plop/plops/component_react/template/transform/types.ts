import Transform from '../../template'

export default (x: string, t: typeof Transform) => {
  const { Type, propsType } = t.start

  let doc = x
  doc = doc.replace(
    /__propsType__/,
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

  return doc
}
