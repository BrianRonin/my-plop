import case_modifiers from '../../utils/case_modifiers'
import Transform from './template.js'
import { PlopGeneratorConfig } from 'plop'

export type Input = {
  name: string,
	props: string
	has_props: boolean
	types: string
	has_types: boolean
	'has_index: string'
	'has_styles: string'
	'has_mock: string'
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
      Transform.Var.has_props = !!input
      return input
    },
  },
  {
    type: 'input',
    name: 'types',
    message: 'types: ',
    filter: (input) => {
      Transform.Var.types = input
      Transform.Var.has_types = !!input
      return input
    },
  },
  {
    type: 'checkbox',
    message: 'Quais arquivos devem ser criados?',
    name: 'customizeFiles',
    choices: [
	'index',
	'styles',
	'mock',,
    ],
    filter: (input: string[], answers: Record<string, any>) => {
      
      if (input.indexOf('index') > -1) {
        Transform.Var.has_index = true
        answers.has_index = 'true'
      }
      if (input.indexOf('styles') > -1) {
        Transform.Var.has_styles = true
        answers.has_styles = 'true'
      }
      if (input.indexOf('mock') > -1) {
        Transform.Var.has_mock = true
        answers.has_mock = 'true'
      }
      return input
    },
  },
      
]

export default prompts
