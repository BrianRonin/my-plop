import Transform from 'plop/generator/template'

export default (x: string, t: typeof Transform) => {
  const { inputsPrompt, typesInput } = t.start
  let doc = x
  doc = doc.replace(
    /__inputs__/,
    t.Var.hasInputs ? inputsPrompt : '',
  )
  doc = doc.replace(
    /__typesInput__/,
    t.Var.hasInputs ? typesInput : '',
  )
  return doc
}
