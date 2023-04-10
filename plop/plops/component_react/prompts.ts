import case_modifiers from '../../utils/case_modifiers'
import Transform from './template.js'
import { PlopGeneratorConfig } from 'plop'

export type Input = {
  name: string
  numbering: string
  group: string
  has_group: boolean
  html_element: string
  has_html_element: boolean
  has_index: boolean
  has_mock: boolean
  has_stories: boolean
  has_styles: boolean
  has_test: boolean
  has_types: boolean
  has_turbo_repo: boolean
  has_presets: boolean
  props: string
  has_props: boolean
  has_chield: boolean
  is_template: boolean
}

const prompts: Partial<PlopGeneratorConfig['prompts']> = [
  {
    type: 'input',
    name: 'name',
    message: 'Nome:  ',
    filter: (input) => {
      Transform.Var.name = input
      return input
    },
  },
  {
    type: 'input',
    name: 'has_template',
    message: 'É um template? ( y/ skip ) ',
    filter: (input, answers) => {
      Transform.Var.is_template = !!input
      if (input) {
        answers.folder_name = answers.name
        answers.base_path = 'src/templates'
      } else {
        answers.base_path = 'src/components'
      }
      return input
    },
  },
  {
    type: 'input',
    name: 'numbering',
    message: 'Numbering:  ',
    filter: (input, answers) => {
      const numbering = !!input ? input : '0'
      Transform.Var.numbering = numbering
      answers.folder_name = answers.name + '_' + numbering
      return numbering
    },
    when: (answers) => {
      return !answers.has_template
    },
  },
  {
    type: 'input',
    name: 'group',
    message: 'src/components/',
    filter: (input, answers) => {
      Transform.Var.group = input
      Transform.Var.has_group = !!input
      if (!!input) {
        answers.divisor = '/'
      }
      return input
    },
    when: (answers) => {
      return !answers.has_template
    },
  },
  {
    type: 'input',
    name: 'group',
    message: 'src/templates/',
    filter: (input, answers) => {
      Transform.Var.group = input
      Transform.Var.has_group = !!input
      if (!!input) {
        answers.divisor = '/'
      }
      return input
    },
    when: (answers) => {
      return !!answers.has_template
    },
  },
  {
    type: 'input',
    name: 'html_element',
    message: 'html_element: ',
    filter: (input) => {
      Transform.Var.html_element = input
      Transform.Var.has_html_element = !!input
      return input
    },
  },
  {
    type: 'input',
    name: 'has_chield',
    message: 'Tem children? ( y/ skip ) ',
    filter: (input) => {
      Transform.Var.has_chield = !!input
      return input
    },
  },
  {
    type: 'input',
    name: 'has_turbo_repo',
    message: 'Preset TurboRepo? ( y/ skip ) ',
    filter: (input) => {
      Transform.Var.has_turbo_repo = !!input
      return input
    },
  },
  {
    type: 'props',
    name: 'props',
    message: 'props: ',
    filter: (input) => {
      Transform.Var.props = input
      Transform.Var.has_props = !!input
      return input
    },
  },
  {
    type: 'checkbox',
    message: 'Quais arquivos devem ser criados?',
    name: 'customize_files',
    choices: [
      'index',
      'mock',
      'stories',
      'styles',
      'test',
      'types',
      'presets',
    ],
    filter: (
      input: string[],
      answers: Record<string, any>,
    ) => {
      if (input.indexOf('index') > -1) {
        Transform.Var.has_index = true
        answers.has_index = 'true'
      }
      if (input.indexOf('mock') > -1) {
        Transform.Var.has_mock = true
        answers.has_mock = 'true'
      }
      if (input.indexOf('stories') > -1) {
        Transform.Var.has_stories = true
        answers.has_stories = 'true'
      }
      if (input.indexOf('styles') > -1) {
        Transform.Var.has_styles = true
        answers.has_styles = 'true'
      }
      if (input.indexOf('test') > -1) {
        Transform.Var.has_test = true
        answers.has_test = 'true'
      }
      if (input.indexOf('types') > -1) {
        Transform.Var.has_types = true
        answers.has_types = 'true'
      }
      if (input.indexOf('presets') > -1) {
        Transform.Var.has_presets = true
        answers.has_presets = 'true'
      }
      return input
    },
  },
]

export default prompts
