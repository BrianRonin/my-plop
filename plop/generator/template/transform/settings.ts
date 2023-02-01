import Transform from 'plop/generator/template'

export default (x: string, t: typeof Transform) => {
  const { cases, inputsSettings, commentsSettings } =
    t.start
  let doc = x
  doc = doc.replace(
    /__cases__/,
    t.Var.hasInputs
      ? cases
      : `\n\t\tname: '{{ snakeCase __ }}',`,
  )
  doc = doc.replace(
    /__inputs__/,
    t.Var.hasInputs ? inputsSettings : '',
  )
  doc = doc.replace(/__comments__/, commentsSettings)
  return doc
}
