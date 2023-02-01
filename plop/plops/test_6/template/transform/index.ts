import Transform from '../../template'

export default (x: string, t: typeof Transform) => {
  const { test } = t.start
  let doc = x
  doc = doc.replace(/__favoriteColor__/, t.Var.colors)
  doc = doc.replace(/__test__/, test)
  return doc
}
