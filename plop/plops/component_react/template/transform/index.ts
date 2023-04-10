import Transform from '../../template'

export default (x: string, t: typeof Transform) => {
  let {
    propsArg,
    propsType,
    Type,
    Mock,
    Style,
    Component,
  } = t.start
  // *** modify PROPS TYPES
  let doc = x

  doc = x.replace(
    /__importTypeFile__/,
    t.Var.has_types ? `import * as T from './types'` : '',
  )

  doc = doc.replace(
    /__exportStyleFile__/,
    t.Var.has_types
      ? `export * as ${Style} from './styles'`
      : '',
  )

  doc = doc.replace(
    /__exportMockFile__/,
    t.Var.has_types
      ? `export * as ${Mock} from './mock'`
      : '',
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

  doc = doc.replace(/__componentName__/, Component)

  // *** modify PROPS
  doc = doc.replace(
    /__props__/,
    t.state(
      '{ children' +
        (t.Var.has_presets
          ? ', styles, stylesPreset'
          : '' + ' }: ') +
        (t.Var.has_types ? 'T.Props' : Type),
      '{ ' +
        propsArg +
        (t.Var.has_presets
          ? ', styles, stylesPreset'
          : '') +
        ' }: ' +
        (t.Var.has_types ? 'T.Props' : Type),
      '{ children, ' +
        propsArg +
        (t.Var.has_presets
          ? ', styles, stylesPreset'
          : '') +
        ' }: ' +
        (t.Var.has_types ? 'T.Props' : Type),
      '{ ' +
        (t.Var.has_presets ? 'styles, stylesPreset' : '') +
        ' }: ' +
        (t.Var.has_types ? 'T.Props' : Type),
    ),
  )
  // *** modfy RETURN
  doc = doc.replace(
    /__return__/,
    t.state(
      `(\n\t\t<S.Main ${
        t.Var.has_presets ? 'styles={Styles}' : ''
      }>\n\t\t\t{children}\n\t\t</S.Main>\n\t)`,
      `(\n\t\t<S.Main ${
        t.Var.has_presets ? 'styles={Styles}' : ''
      }></S.Main>\n\t)`,
      `(\n\t\t<S.Main ${
        t.Var.has_presets ? 'styles={Styles}' : ''
      }>\n\t\t\t{children}\n\t\t</S.Main>\n\t)`,
      `(\n\t\t<S.Main ${
        t.Var.has_presets ? 'styles={Styles}' : ''
      }></S.Main>\n\t)`,
    ),
  )

  // *** modify PRESETS
  doc = doc.replace(
    /__importPresets__/,
    t.Var.has_presets
      ? `import { useTheme } from '@emotion/react'\nimport Presets from './presets.css'`
      : '',
  )

  doc = doc.replace(
    /__usePresets__/,
    t.Var.has_presets
      ? `
    const theme = useTheme()
    const Styles: T.Styles = {
    ...Presets(theme)[stylesPreset ?? 'default'],
    ...styles,
}\n`
      : '',
  )

  return doc
}
