export default function (
  _identifier: string | Record<string, string>,
  _obj?: Record<string, string>,
): Record<string, (name?: string) => string> {
  let obj: string | Record<string, string> =
    _obj ?? _identifier
  let identifier = _obj ? _identifier : '__'

  const add_hooks = (obj: Record<string, string>) => {
    return Object.keys(obj).reduce((prev, match) => {
      return obj[match].match(/{{ \.\.\..* }}/)
        ? prev
        : {
            ...prev,
            [match]: `{{ ...${match} }}`,
          }
    }, {})
  }

  const hooks = add_hooks(obj as Record<string, string>)
  return Object.keys(obj).reduce((prev, k, i) => {
    const key = k as keyof typeof obj
    const _resolve = {
      [key]: (name: string) => {
        let str = obj[key] as string
        str.match(/{{ \.\.\..* }}/) &&
          Object.keys(hooks).forEach((key) => {
            str = str.replace(
              hooks[key as keyof typeof hooks],
              str,
            )
          })
        return name
          ? str.replace(identifier as string, name)
          : str
      },
    }
    return { ...prev, ..._resolve }
  }, {})
}

// console.log(c)
// console.log(c.test('teste'))
// console.log(c.testDois('teste'))
