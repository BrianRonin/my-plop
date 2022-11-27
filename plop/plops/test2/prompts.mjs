import Transform from './template.mjs'

export default [
  {
    type: 'input',
    name: 'name',
    message: 'name: ',
    filter: (input) => {
      Transform.var.name = input
      return input
    },
  },
{
  type: 'input',
  name: 'mock',
  message: 'mock: ',
  filter: (input) => {
    Transform.var.mock = input
    Transform.var.hasmock = !!input
    return input
  },
},
{
  type: 'input',
  name: 'types',
  message: 'types: ',
  filter: (input) => {
    Transform.var.types = input
    Transform.var.hastypes = !!input
    return input
  },
},
]
