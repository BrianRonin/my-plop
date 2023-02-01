import case_modifiers from '../../utils/case_modifiers'
import Transform from './template.js'
import { PlopGeneratorConfig } from 'plop'

export type Input = {
  name: string
  props: string
  has_props: boolean
  colors: string
  has_colors: boolean
  has_index: boolean
  has_styles: boolean
  has_types: boolean
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
    name: 'colors',
    message: 'colors: ',
    filter: (input) => {
      Transform.Var.colors = input
      Transform.Var.has_colors = !!input
      return input
    },
  },
  {
    type: 'checkbox',
    message: 'Quais arquivos devem ser criados?',
    name: 'customizeFiles',
    choices: ['index', 'styles', 'types'],
    filter: (
      input: string[],
      answers: Record<string, any>,
    ) => {
      if (input.indexOf('index') > -1) {
        Transform.Var.has_index = true
        answers.has_index = 'true'
      }
      if (input.indexOf('styles') > -1) {
        Transform.Var.has_styles = true
        answers.has_styles = 'true'
      }
      if (input.indexOf('types') > -1) {
        Transform.Var.has_types = true
        answers.has_types = 'true'
      }
      return input
    },
  },
]

export default prompts
