const y =
  '\tPropOpcionalEComponent: {{ -export_and_impot_mock }}: any\n\t'
function teste(input) {
  let i = 'export_and_impot_mock'
  return y.replace(`{{ -${i} }}`, 'sei la')
}
console.log(teste())
