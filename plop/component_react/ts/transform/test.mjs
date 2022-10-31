export default (x, t) => {
  const { import_mock, snake_case_name } = t.start
  let doc = x
  doc = doc.replace(
    /__importMock__/,
    t.var.hasMock ? import_mock : '',
  )
  doc = doc.replace(
    /__hasMock__/,
    t.var.hasMock ? '{ mock_' + snake_case_name + ' }' : '',
  )
  return doc
}
