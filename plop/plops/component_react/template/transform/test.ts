import Transform from '../../template'

export default (x: string, t: typeof Transform) => {
  const { Component } = t.start
  let doc = x
  doc = doc.replace(/__component__/g, Component)
  return doc
}
