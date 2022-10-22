export const transformComponent = (x) => {
  let { propsType, mock, propsArg, hasChield } = var_components
  const nameInCamel = camelize(var_components.name)
  const state = function (onlyChield, onlyArg, both, anything) {
    const isFunc = (x) => typeof x === 'function' ? x() : x
    return hasChield || propsArg ?
      hasChield && propsArg ? isFunc(both)
        : propsArg ? isFunc(onlyArg) : isFunc(onlyChield)
      : isFunc(anything)
  }
  // *** modify PROPS TYPES
  let doc = x.replace(/\?\?propsType\?\?/,
    state(
      '\n\t' + 'children: React.ReactNode',
      propsType,
      '\n\t' + 'children: React.ReactNode' + propsType,
      '\n\t' + '//',
    ))
  // *** modify ARG
  doc = doc.replace(/\?\?props\?\?/,
    state(
      '{ children }: ' + nameInCamel + 'Props',
      '{ ' + propsArg + ' }: ' + nameInCamel + 'Props',
      '{ children, ' + propsArg + ' }: ' + nameInCamel + 'Props',
      ''
    ))
  // *** modfy RETURN
  doc = doc.replace(/\?\?return\?\?/,
    state(
      '(\n\t\t<S.Main>\n\t\t\t{children}\n\t\t</S.Main>\n\t)',
      '(\n\t\t<S.Main>\n\t\t\t//\n\t\t</S.Main>\n\t)',
      '(\n\t\t<S.Main>\n\t\t\t{children}\n\t\t</S.Main>\n\t)',
      '(\n\t\t<S.Main>\n\t\t\t//\n\t\t</S.Main>\n\t)'
    )
  )
  // *** modfy IMPORT
  doc = doc.replace(/\?\?importComponentAndType\?\?/,
    isEmptyObject(propsComponent)
      ? ''
      : (() => {
        for (const [k, { camelCase }] of Object.entries(propsComponent)) {
          return `\nimport { ${camelCase}Props, ${propperCase} } from "../${snakeCase}/${snakeCase}";`
        }
      })()
  )
  // *** modfy MOCK
  doc = doc.replace(/\?\?mock\?\?/, state(
    "\n\tchildren: ':D',",
    mock,
    "\n\tchildren: ':D'," + mock,
    '\n\t//'
  ))
  doc = doc.replace(/\?\?importMock\?\?/,
    isEmptyObject(propsComponent)
      ? ''
      : (() => {
        for (const [k, { snakeCase }] of Object.entries(propsComponent)) {
          return `\nimport { mock_${snakeCase} } from "../${snakeCase}/M.${snakeCase}";`
        }
      })()
  )
  // *** modfy STYLE
  doc = doc.replace(/\?\?typeStyle\?\?/, state(
    `type S_${nameInCamel}Props = Exclude<Pick<${nameInCamel}Props, 'children'>, ${nameInCamel}Props>`,
    `type S_${nameInCamel}Props = Exclude<Pick<${nameInCamel}Props, >, ${nameInCamel}Props>`
  ))

  return doc
}
