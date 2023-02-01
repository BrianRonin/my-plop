import Transform from 'plop/generator/template'

export default (x: string, t: typeof Transform) => {
  const {
    inputsPrompt,
    typesInput,
    customize_files,
    customize_files_choice_types,
  } = t.start
  let doc = x
  doc = doc.replace(
    /__inputs__/,
    t.Var.hasInputs ? inputsPrompt : '',
  )
  doc = doc.replace(
    /__typesInput__/,
    t.Var.hasInputs ? typesInput : '',
  )
  doc = doc.replace(
    /__customizeFiles__/g,
    t.Var.hasCustomizeFiles ? customize_files : '',
  )
  doc = doc.replace(
    /__customizeChoiceTypes__/g,
    t.Var.hasCustomizeFiles
      ? customize_files_choice_types
      : '',
  )
  return doc
}
