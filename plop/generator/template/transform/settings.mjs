export default (x, t) => {
  const { cases, inputsSettings, commentsSettings } =
    t.start
  let doc = x
  doc = doc.replace(/__cases__/, cases)
  doc = doc.replace(/__inputs__/, inputsSettings)
  doc = doc.replace(/__comments__/, commentsSettings)
  return doc
}
