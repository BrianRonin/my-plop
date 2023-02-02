import case_modifiers from '../../../../utils/case_modifiers'
import Transform from '../../template'

export default (x: string, t: typeof Transform) => {
  const { Component, Mock } = t.start
  let doc = x

  doc = doc.replace(
    /__imports__/,
    t.Var.has_mock
      ? `${Component}, ${Mock}`
      : `${Component}`,
  )

  doc = doc.replace(
    /__title__/,
    t.Var.has_group
      ? `${case_modifiers.properCase(
          t.Var.group,
        )}/${Component}`
      : Component,
  )

  doc = doc.replace(/__mock__/g, Mock)
  doc = doc.replace(/__component__/g, Component)

  return doc
}
