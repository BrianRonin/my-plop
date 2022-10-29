export const transform_component_mock = () => {
  // *** modfy IMPORT
  doc = doc.replace(
    /\?\?importComponentAndType\?\?/,
    isEmptyObject(propsComponent)
      ? ''
      : (() => {
          for (const [k, { camelCase }] of Object.entries(
            propsComponent,
          )) {
            return `\nimport { ${camelCase}Props, ${propperCase} } from "../${snakeCase}/${snakeCase}";`
          }
        })(),
  )
  // *** modfy MOCK
  doc = doc.replace(
    /\?\?mock\?\?/,
    state(
      "\n\tchildren: ':D',",
      mock,
      "\n\tchildren: ':D'," + mock,
      '\n\t//',
    ),
  )
  doc = doc.replace(
    /\?\?importMock\?\?/,
    isEmptyObject(propsComponent)
      ? ''
      : (() => {
          for (const [k, { snakeCase }] of Object.entries(
            propsComponent,
          )) {
            return `\nimport { mock_${snakeCase} } from "../${snakeCase}/M.${snakeCase}";`
          }
        })(),
  )
}
