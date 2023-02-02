import Transform from '../../template'

export default (x: string, t: typeof Transform) => {
  const { mock } = t.start
  let doc = x
  // *** modfy MOCK
  doc = doc.replace(
    /__mock__/,
    t.state(
      "\n\tchildren: ':D',",
      mock,
      "\n\tchildren: ':D'," + mock,
      '\n\t//',
    ),
  )
  return doc
}
