export const transformComponent_styles = (x, t) => {
  const { type_styled } = t.start
  let doc = x.replace(/__typeStyle__/, type_styled)
  return doc
}
