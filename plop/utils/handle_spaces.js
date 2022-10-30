export const handle_spaces = (
  index,
  maxLength,
  array,
  start,
  between,
  end,
  onlyOne,
) => {
  return index === 0
    ? maxLength > 0
      ? start
      : onlyOne
    : maxLength === index + 1
    ? end
    : between
}
