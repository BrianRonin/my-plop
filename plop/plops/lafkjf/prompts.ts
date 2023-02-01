import case_modifiers from '../../utils/case_modifiers'
import Transform from './template.js'
import { PlopGeneratorConfig } from 'plop'

export type Input = {
  name: string,
	lkfj: string
	has_lkfj: boolean
	has_alfkj: boolean
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
    name: 'lkfj',
    message: 'lkfj: ',
    filter: (input) => {
      Transform.Var.lkfj = input
      Transform.Var.has_lkfj = !!input
      return input
    },
  },
  {
    type: 'checkbox',
    message: 'Quais arquivos devem ser criados?',
    name: 'customizeFiles',
    choices: [
	'alfkj',,
    ],
    filter: (input: string[], answers: Record<string, any>) => {
      
      if (input.indexOf('alfkj') > -1) {
        Transform.Var.has_alfkj = true
        answers.has_alfkj = 'true'
      }
      return input
    },
  },
      
]

export default prompts
