import case_modifiers from '../../utils/case_modifiers'
import Transform from './template.js'
import { PlopGeneratorConfig } from 'plop'

export type Input = {
  name: string
  group: string
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
    name: 'group',
    message: '/src/svg/:',
    filter: (input) => {
      Transform.Var.group = input
      return input
    },
  },
]

export default prompts
