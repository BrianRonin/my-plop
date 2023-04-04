import Transform from '../../template'

export default (x: string, t: typeof Transform) => {
  const { Type, propsType } = t.start

  let doc = x
  doc = doc.replace(
    /__propsType__/,
    t.state(
      '{\n\t' +
        'children: React.ReactNode\n' +
        (t.Var.has_presets
          ? '\nstyles?: Partial<Styles>\n\tstylesPreset?: StylesPresets'
          : '') +
        '}',
      '{\n\t' +
        propsType +
        (t.Var.has_presets
          ? '\nstyles?: Partial<Styles>\n\tstylesPreset?: StylesPresets'
          : '') +
        '\n}',
      '{\n\t' +
        'children: React.ReactNode\n\t' +
        propsType +
        (t.Var.has_presets
          ? '\nstyles?: Partial<Styles>\n\tstylesPreset?: StylesPresets'
          : '') +
        '\n}',
      '{\n\t' +
        (t.Var.has_presets
          ? '\nstyles?: Partial<Styles>\n\tstylesPreset?: StylesPresets'
          : '//') +
        '\n}',
    ),
  )

  doc = doc.replace(
    /__exportPresets__/,
    t.Var.has_presets
      ? `export type StylesPresets = 'default'`
      : '',
  )

  doc = doc.replace(
    /__exportStyles__/,
    t.Var.has_presets ? 'export interface Styles {}' : '',
  )

  return doc
}
