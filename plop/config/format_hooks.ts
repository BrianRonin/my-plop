export default function format_hooks(
  obj: Record<string, string | string[]>,
) {
  const output = { ...obj }
  const keys = Object.keys(output)
  Object.keys(output).forEach((k) => {
    const isMany = Array.isArray(output[k])
    const variables = output[k] as string[]
    isMany
      ? variables.map((input, index) => {
          keys.forEach((key) => {
            const regex = new RegExp(`{{ ...${key} }}`, 'g')
            const isMany = Array.isArray(output[key])
            const variables = output[key] as string[]
            variables[index].match(regex) &&
              (variables[index] = input.replace(
                regex,
                isMany
                  ? variables.join('')
                  : (output[key] as string),
              ))
          })
        })
      : (() =>
          keys.forEach((key) => {
            const regex = new RegExp(`{{ ...${key} }}`, 'g')
            const _variable = Array.isArray(output[key])
              ? (output[key] as string[]).join('')
              : (output[key] as string)
            const variable = output[k] as string
            variable.match(regex) &&
              (output[k] = variable.replace(
                regex,
                _variable,
              ))
          }))()
  })
  console.log(output)
  return output
}
