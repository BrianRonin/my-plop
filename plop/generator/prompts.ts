import case_modifiers from '../utils/case_modifiers'
import Transform from './template.js'
import { PlopGeneratorConfig } from 'plop'

export type Input = {
  name: string
  files: string
  inputs: string
  hasInputs: boolean
}

const prompts: Partial<PlopGeneratorConfig['prompts']> = [
  {
    type: 'input',
    name: 'name',
    message: 'qual o nome do plop?',
    filter: (input, answers) => {
      Transform.Var.name = input
      return input
    },
  },
  {
    type: 'input',
    name: 'files',
    message: 'quais arquivos você criara',
    filter: (input, answers) => {
      Transform.Var.files = input
      input
        .split(',')
        .forEach((_input: string, i: number) => {
          const input = case_modifiers.snakeCase(_input)
          answers[`_${i.toString()}_`] = input
        })
      return input
    },
  },
  {
    type: 'input',
    name: 'inputs',
    message: 'quais inputs para criação',
    filter: (input, answers) => {
      Transform.Var.inputs = input
      Transform.Var.hasInputs = !!input
      return input
    },
  },
]

export default prompts
