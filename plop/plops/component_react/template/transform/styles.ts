import Transform from '../../template'

export default (x: string, t: typeof Transform) => {
  // const {} = t.start
  let doc = x
  doc = doc.replace(
    /__importStyles__/,
    t.Var.has_presets
      ? `import { Styles } from './types'`
      : '',
  )
  doc = doc.replace(
    /__typeStyles__/,
    t.Var.has_presets
      ? `interface props {\n\tstyles: Styles\n}`
      : '',
  )

  doc = doc.replace(
    /__typeProps__/,
    t.Var.has_presets ? '<props>' : '',
  )

  doc = doc.replace(
    /__initialProps__/,
    t.Var.has_presets ? `theme, styles` : 'theme',
  )
  return doc
}
