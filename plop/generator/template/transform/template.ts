import Transform from 'plop/generator/template'

export default (x: string, t: typeof Transform) => {
  const {
    importTransform,
    transform,
    inputsTransform,
    hasInputs,
  } = t.start
  let doc = x
  doc = doc.replace(/__import_transform__/, importTransform)
  doc = doc.replace(/__transform__/, transform)
  doc = doc.replace(
    /__inputs__/,
    t.Var.hasInputs ? inputsTransform : '',
  )
  doc = doc.replace(
    /__hasInputs__/,
    t.Var.hasInputs ? hasInputs : '',
  )
  return doc
}
