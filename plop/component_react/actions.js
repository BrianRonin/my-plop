import { TransformComponent } from './template.js'

export const transformComponent = new TransformComponent()

const getPaths_component = (whatIs, fileName, skip) => {
  return {
    type: 'add',
    templateFile:
      'plop/component_react/{{ isTs }}/generator/' +
      whatIs +
      '.hbs',
    path: '{{ group }}'
      ? 'src/components/{{ properCase group }}/{{ snakeCase name }}/' +
        fileName
      : './src/components/{{ properCase group }}/' +
        fileName, //diretorio destiono
    transform: (doc) => transformComponent[whatIs](doc),
    skip: () => (skip ? false : '-SKIP ' + whatIs),
  }
}

export const plop_actions_component = [
  {
    ...getPaths_component(
      'index',
      '{{ snakeCase name }}.tsx',
      '{{ name }}',
    ),
  },
  {
    ...getPaths_component(
      'styles',
      'S.{{ snakeCase name }}.tsx',
      '{{ name }}',
    ),
  },
  {
    ...getPaths_component(
      'mock',
      'M.{{ snakeCase name }}.ts',
      '{{ hasMock }}',
    ),
  },
  {
    ...getPaths_component(
      'test',
      '{{ snakeCase name }}.test.tsx',
      '{{ hasTest }}',
    ),
  },
  {
    ...getPaths_component(
      'stories',
      '{{ snakeCase name }}.stories.tsx',
      '{{ hasStorybook }}',
    ),
  },
]
