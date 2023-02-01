import TransformComponent from './template.mjs'

export default [
  {
    type: 'input',
    name: 'name',
    message: 'qual o nome do seu componente?',
    filter: (input) => {
      TransformComponent.var.name = input
      return input
    },
  },
  {
    type: 'input',
    message: 'O componente faz parte de um grupo?',
    prefix: 'components/',
    filter: (input, answers) => {
      if (input) {
        const path = input.replace(' ', '/')
        TransformComponent.var.hasGroup = true
        TransformComponent.var.group = path
        answers.titleStorybook =
          'components/' + path + '/' + answers.name
        return input
      } else {
        answers.titleStorybook =
          'components/' + answers.name
        return input
      }
    },
    name: 'group',
  },
  {
    type: 'input',
    name: 'htmlElement',
    message: 'qual o elemento HTML do Main?',
    filter: (x, r) => {
      TransformComponent.var.htmlElement = x
      return x
    },
  },
  {
    type: 'checkbox',
    message: 'Seu componente tem?',
    name: 'components_choices',
    choices: [
      'Index',
      'Mock',
      'Chield',
      'Props',
      'Typescript',
      'Test',
      'Storybook',
    ],
    filter: (x, r) => {
      let hasIndex = false
      if (x.indexOf('Index') > -1) {
        hasIndex = true
        TransformComponent.var.hasIndex = true
        r.hasIndex = 'true'
      }
      if (x.indexOf('Mock') > -1 && hasIndex) {
        TransformComponent.var.hasMock = true
        r.hasMock = 'true'
      }
      if (x.indexOf('Props') > -1 && hasIndex) {
        TransformComponent.var.hasProps = true
        r.hasProps = 'true'
      }
      if (x.indexOf('Test') > -1 && hasIndex) {
        TransformComponent.var.hasTest = true
        r.hasTest = 'true'
      }
      if (x.indexOf('Storybook') > -1) {
        TransformComponent.var.hasStorybook = true
        r.hasStorybook = 'true'
      }
      if (x.indexOf('Chield') > -1)
        TransformComponent.var.hasChield = true
      if (x.indexOf('Typescript') > -1) {
        r.isTs = 'ts'
      } else {
        r.isTs = 'js'
      }
      return x
    },
  },
  {
    when: (answer) => answer.hasProps && answer.hasIndex,
    type: 'input',
    message:
      'Qual suas props?\nDivisor: ", "\nOpcional: "_"\n Component: "#"',
    name: 'props',
    filter: (input, r) => {
      input.match(/#/) &&
        (TransformComponent.var.hasPropComponent = true)
      input.match(/@/) &&
        (TransformComponent.var.hasTypeStyle = true)
      TransformComponent.var.props = input
      return input
    },
  },
]
