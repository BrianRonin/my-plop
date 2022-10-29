// *** modfy STYLE
doc = doc.replace(
  /\?\?typeStyle\?\?/,
  state(
    `type S_${nameInCamel}Props = Exclude<Pick<${nameInCamel}Props, 'children'>, ${nameInCamel}Props>`,
    `type S_${nameInCamel}Props = Exclude<Pick<${nameInCamel}Props, >, ${nameInCamel}Props>`,
  ),
)
