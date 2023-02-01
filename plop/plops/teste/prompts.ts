import case_modifiers from '../../utils/case_modifiers'
import Transform from './template.js'
import { PlopGeneratorConfig } from 'plop'

export type Input = {
  name: string
  props: string
  hasprops: boolean
  types: string
  hastypes: boolean
}

const prompts: Partial<PlopGeneratorConfig['prompts']> = [
  {
    type: 'input',
    name: 'name',
    message: 'name: ',
    filter: (input) => {
      Transform.Var.name = input
      return input
    },
  },
  {
    type: 'input',
    name: 'props',
    message: 'props: ',
    filter: (input) => {
      Transform.Var.props = input
      Transform.Var.hasprops = !!input
      return input
    },
  },
  {
    type: 'input',
    name: 'types',
    message: 'types: ',
    filter: (input) => {
      Transform.Var.types = input
      Transform.Var.hastypes = !!input
      return input
    },
  },
]

export default prompts
