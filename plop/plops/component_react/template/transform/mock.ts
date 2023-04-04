import Transform from '../../template'

export default (x: string, t: typeof Transform) => {
  const { mock } = t.start
  let doc = x
  // *** modfy MOCK
  doc = doc.replace(
    /__mock__/,
    t.state(
      "\n\tchildren: ':D'," +
        (t.Var.has_presets ? '\n\tstyles: {},' : ''),
      mock + (t.Var.has_presets ? '\n\tstyles: {},' : ''),
      "\n\tchildren: ':D'," +
        mock +
        (t.Var.has_presets ? '\n\tstyles: {},' : ''),
      '\n\t//' +
        (t.Var.has_presets ? '\n\tstyles: {},' : ''),
    ),
  )
  return doc
}
