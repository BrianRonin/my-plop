export default (x, t) => {
  const { import_mock, snake_case_name } = t.start
  let doc = x
  doc = doc.replace(
    /__importMock__/,
    t.var.hasMock ? import_mock : '',
  )
  doc = doc.replace(
    /__hasMock__/,
    t.var.hasMock
      ? 'mock_' + snake_case_name
      : t.state(
          '{\n\tchildren: <h1>tudo ok<h1>,\n},',
          '{},',
          '{\n\tchildren: <h1>tudo ok<h1>,\n},',
          '{},',
        ),
  )
  return doc
}
