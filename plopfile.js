// import { transformComponent } from './plop/component_react/ts/transform/transform_components_react_ts'
// import { Prop } from './plop/component_react/variables/prop/Prop'
//import { testVar } from './teste.js'

export const var_components = {
  name: 'algum nome',
  hasChield: false,
  hasProps: false,
  hasMock: false,
  hasTest: false,
  hasStorybook: false,
  props: false,
  path: '',
}

export default function (
  /** @type {import('plop').NodePlopAPI} */
  plop,
) {
  // plop generator code
  plop.setWelcomeMessage(
    'escolha um plop para gerar plops: \n',
  )

  plop.setGenerator('component', {
    description: 'this is a skeleton plopfile',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'qual o nome do seu componente?',
        filter: (x) => {
          var_components.name = x
          return x
        },
      },
      {
        type: 'input',
        message: 'O componente faz parte de um grupo?',
        prefix: 'components/',
        filter: (x, r) => {
          if (x) {
            const y = x.replace('', '/')
            r.titleStorybook =
              'components/' + y + '/' + r.name
            return x
          } else {
            r.titleStorybook = 'components/' + r.name
            return x
          }
        },
        name: 'group',
      },
      {
        type: 'input',
        name: 'htmlElement',
        message: 'qual o elemento HTML do Main?',
      },
      {
        type: 'checkbox',
        message: 'Seu componente tem?',
        name: 'components_choices',
        choices: [
          'Mock',
          'Chield',
          'Props',
          'Typescript',
          'Test',
          'Storybook',
        ],
        filter: (x, r) => {
          //return JSON.stringify(x)
          if (x.indexOf('Mock') > -1)
            var_components.hasMock = true
          if (x.indexOf('Props') > -1) {
            var_components.hasProps = true
            r.hasProps = true
          }
          if (x.indexOf('Test') > -1) {
            var_components.hasTest = true
            r.hasTest = true
          }
          if (x.indexOf('Storybook') > -1) {
            var_components.hasStorybook = true
            r.hasStorybook = true
          }
          if (x.indexOf('Chield') > -1)
            var_components.hasChield = true
          if (x.indexOf('Typescript') > -1) {
            r.isTs = 'ts'
          } else {
            r.isTs = 'js'
          }
        },
      },
      {
        when: (r) => r.hasProps,
        type: 'input',
        message:
          'Qual suas props?\nDivisor: ", "\nOpcional: ?',
        name: 'props',
        filter: (props, r) => {
          // var_components.props = new Prop(props)
          return props
        },
      },
    ], // array of inquirer prompts
    actions: [
      {
        type: 'addMany',
        destination: '{{group}}'
          ? './src/components/{{ constantCase group }}/{{ snakeCase name }}' //diretorio destiono
          : './src/components/{{ snakeCase name }}', //diretorio destiono
        stripExtensions: 'hbs', // .extension a ser removido
        templateFiles:
          'plop/component_react/generator/template/**.hbs',
        base: 'plop/component_react/generator/template',
        // transform: (transformComponent)
      },
      {
        // *** HAS MOCK? ***
        skip: () => {
          return var_components.hasMock ? false : 'SEM MOCK'
        },
        //tem mock ? //,
        type: 'add',
        templateFile:
          'plop/component_react/generator/mock.hbs',
        path: '{{group}}'
          ? `./src/components/{{ constantCase group }}/{{ snakeCase name }}/M.${testVar}.ts` //diretorio destiono
          : './src/components/{{ snakeCase name }}/M.{{ snakeCase name }}.ts', //diretorio destiono
        isMock: '{{group}}' ? true : false,
        // transform: (transformComponent)
      },
    ],
  })

  plop.setGenerator('markdown component', {
    description: 'this is a skeleton plopfile',
    prompts: [
      {
        type: 'input',
        name: 'element',
        message: 'qual o elemento HTML?',
      },
      {
        type: 'input',
        name: 'name',
        message: 'qual o nome do seu componente markdown?',
      },
      {
        type: 'input',
        name: 'group',
        message:
          'o componente esta em um grupo especifico?',
        filter: (x, r) => {
          if (x) {
            const y = x.replace('', '/')
            return 'markdown/' + y + r.name
          } else {
            return 'markdown/' + r.name
          }
        },
      },
      {
        type: 'rawlist',
        name: 'chield',
        choices: ['chield', 'noChield'],
        message: 'tem chield?',
      },
      {
        type: 'rawlist',
        name: 'isTs',
        choices: ['ts', 'js'],
        message: 'tem typescript?',
      },
    ], // array of inquirer prompts
    actions: [
      {
        type: 'addMany',
        destination:
          './src/components/markdown/components/{{ snakeCase name }}', //diretorio destiono
        stripExtensions: 'hbs', // .extension a ser removido
        templateFiles:
          'src/components/generator/markdown/{{isTs}}/{{chield}}/**.hbs',
        base: 'src/components/generator/markdown/{{isTs}}/{{chield}}/',
      },
    ], // array of actions
  })
}
