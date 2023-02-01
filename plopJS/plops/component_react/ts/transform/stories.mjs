import file_name from '../../file_name.mjs'
export default (x, t) => {
  const {
    import_mock,
    name_mock,
    import_component_and_type,
    name_component,
    name_type,
    style_as_component,
    import_style_as_component,
    custom: { css_in_js },
  } = t.start
  let doc = x
  doc = doc.replace(
    /__importMock__/,
    t.var.hasMock ? import_mock : '',
  )
  doc = doc.replace(
    /__hasComponent__/,
    t.var.hasIndex ? `component: ${name_component},` : '',
  )

  doc = doc.replace(
    /__importCssInJs__/,
    t.var.hasIndex
      ? ''
      : css_in_js.match(/styled components/i)
      ? "\nimport styled, { css } from 'styled-components'\n"
      : css_in_js.match(/emotion/i)
      ? "\nimport { css } from '@emotion/react'\nimport styled from '@emotion/styled'"
      : '\n// você precisa escolher um tipo de css_in_js no projeto em settings\n// css_in_js: ' +
        JSON.stringify(css_in_js),
  )
  doc = doc.replace(
    /__importStyleAsComponent__/,
    t.var.hasIndex ? '' : '\n' + import_style_as_component,
  )
  doc = doc.replace(
    /__hasArgs__/,
    t.var.hasIndex ? `args: __hasMock__,` : '',
  )
  doc = doc.replace(
    /__hasMock__/,
    t.var.hasMock
      ? name_mock
      : t.state(
          '{\n\tchildren: <h1>tudo ok<h1>,\n\t},',
          '{},',
          '{\n\tchildren: <h1>tudo ok<h1>,\n\t},',
          '{},',
        ),
  )

  doc = doc.replace(
    /__typeComponent__/,
    t.var.hasIndex ? `< ${name_type}>` : '',
  )

  doc = doc.replace(
    /__importComponentAndType__/,
    t.var.hasIndex ? import_component_and_type : '',
  )

  doc = doc.replace(
    /__mockStyle__/,
    t.var.hasIndex
      ? ''
      : `
const _${style_as_component} = styled.${t.var.htmlElement}\`
  \${({theme}) => css\`
    \${${style_as_component}}
  \`}
\`
`,
  )

  doc = doc.replace(
    /__component__/,
    t.var.hasIndex
      ? `<${name_component} {...args} />`
      : t.var.hasChield
      ? `(\n\t<_${style_as_component}>\n\t\t<h1>Conteudo</h1>\n\t</_${style_as_component}>\n)`
      : `<_${style_as_component} />`,
  )

  return doc
}
