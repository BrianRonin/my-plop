export default (x, t) => {
  const { importTransform, transform, inputsTransform } =
    t.start
  let doc = x
  doc = doc.replace(/__import_transform__/, importTransform)
  doc = doc.replace(/__transform__/, transform)
  doc = doc.replace(/__inputs__/, inputsTransform)
  return doc
}
