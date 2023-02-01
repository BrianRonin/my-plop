// import actions_component from './plopTs/plops/component_react/actions'
// import prompts_components from './plopTs/plops/component_react/prompts'
// import actions_template from './plopTs/plops/template_react/actions'
// import prompts_template from './plopTs/plops/template_react/prompts'

import actions_plop from './plop/generator/actions'
import prompts_plop from './plop/generator/prompts'
import actions_plop_test from './plop/plops/test_10/actions'
import prompts_plop_test from './plop/plops/test_10/prompts'

import { NodePlopAPI } from 'plop'

export default function (plop: NodePlopAPI) {
  // plop generator code
  plop.setWelcomeMessage('Oque deseja criar?')
  // plop.setGenerator('component react', {
  //   description: 'criação de componentes react com js/ts',
  //   prompts: [...prompts_components],
  //   actions: [...actions_component],
  // })
  // plop.setGenerator('template react', {
  //   description: 'criação de templates react com js/ts',
  //   prompts: [...prompts_template],
  //   actions: [...actions_template],
  // })
  plop.setGenerator('plop', {
    description: 'criação de geradores de plop',
    prompts: [...(prompts_plop as any)],
    actions: [...actions_plop],
  })
  plop.setGenerator('test', {
    description: 'test',
    prompts: [...(prompts_plop_test as any)],
    actions: [...actions_plop_test],
  })
}
