import Transform from './template.mjs'

export default [
  {
    type: 'input',
    name: 'name',
    message: 'escolha um nome',
    filter: (input) => {
      Transform.var.name = input
      return input
    },
  }
]
