export const isEmptyObject = (obj) => {
  return JSON.stringify(obj) === '{}'
    | typeof (JSON.stringify(obj)) === 'undefined'
    ? true
    : false
}