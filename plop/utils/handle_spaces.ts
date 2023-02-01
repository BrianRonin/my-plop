export default (
  index: number,
  maxLength: number,
  array: any[],
  start: string,
  between: string,
  end: string,
  onlyOne: string,
) => {
  return index === 0
    ? maxLength !== 1
      ? start
      : onlyOne
    : maxLength === index + 1
    ? end
    : between
}
