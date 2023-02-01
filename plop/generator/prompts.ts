import case_modifiers from '../utils/case_modifiers'
import Transform from './template.js'
import { PlopGeneratorConfig } from 'plop'

export type Input = {
  name: string
  files: string
  inputs: string
  hasInputs: boolean
  hasCustomizeFiles: string
}

const prompts: Partial<PlopGeneratorConfig['prompts']> = [
  {
    type: 'input',
    name: 'name',
    message: 'Qual o nome do plop?',
    filter: (input, answers) => {
      Transform.Var.name = input
      return input
    },
  },
  {
    type: 'input',
    name: 'files',
    message: 'Quais arquivos você criara?',
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
    name: 'hasCustomizeFiles',
    message:
      'Você deseja customizar quais arquivos sera gerado ao fazer o plop? ( Yes/ Skip )',
    filter: (input, answers) => {
      Transform.Var.hasCustomizeFiles = input
      answers.hasCustomizeFiles = input
      return input
    },
  },
  {
    type: 'input',
    name: 'inputs',
    message: 'Quais serão o nome para cada input?',
    filter: (input, answers) => {
      Transform.Var.inputs = input
      Transform.Var.hasInputs = !!input
      return input
    },
  },
]

export default prompts
