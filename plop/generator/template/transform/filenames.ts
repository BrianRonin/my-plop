import Transform from 'plop/generator/template'

export default (x: string, t: typeof Transform) => {
  const { fileNames } = t.start
  let doc = x
  doc = doc.replace('__fileNames__', fileNames)
  return doc
}
