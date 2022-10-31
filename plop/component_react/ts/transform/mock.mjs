export default (x, t) => {
  const { mock, import_mock_prop_component } = t.start
  let doc = x
  // *** modfy MOCK
  doc = doc.replace(
    /__importMock__/,
    import_mock_prop_component,
  )
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
