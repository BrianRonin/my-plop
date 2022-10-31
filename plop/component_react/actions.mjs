import TransformComponent from './template.mjs'

const getPaths_component = (whatIs, fileName, skip) => {
  return {
    type: 'add',
    templateFile:
      'plop/component_react/{{ isTs }}/generator/' +
      whatIs +
      '.hbs',
    path: '{{ group }}'
      ? 'src/components/{{ constantCase group }}/{{ snakeCase name }}/' +
        fileName
      : './src/components/{{ constantCase group }}/' +
        fileName, //diretorio destiono
    transform: (doc) => TransformComponent[whatIs](doc),
    skip: () => (skip ? false : '-SKIP ' + whatIs),
  }
}

export default [
  {
    ...getPaths_component(
      'stories',
      '{{ snakeCase name }}.stories.tsx',
      '{{ hasStorybook }}',
    ),
  },
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
]
