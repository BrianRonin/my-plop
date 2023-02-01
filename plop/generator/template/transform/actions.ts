import Transform from 'plop/generator/template'

export default (x: string, t: typeof Transform) => {
  console.log(t.start)
  const { getPaths } = t.start
  let doc = x
  doc = doc.replace(/__getPaths__/, getPaths)
  return doc
}
