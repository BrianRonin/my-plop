import actions_plop from './generator/actions'
import prompts_plop from './generator/prompts'
import prompts_components from './plops/component_react/prompts'
import actions_components from './plops/component_react/actions'
import prompts_template from './plops/template_react/prompts'
import actions_template from './plops/template_react/actions'

import { NodePlopAPI } from 'plop'

export default function (plop: NodePlopAPI) {
  // plop generator code
  plop.setWelcomeMessage('Oque deseja criar?')

  plop.setGenerator('component react', {
    description: 'criação de componentes react com js/ts',
    prompts: [...(prompts_components as any)],
    actions: [...actions_components],
  })
  plop.setGenerator('template react', {
    description: 'criação de templates react com js/ts',
    prompts: [...(prompts_template as any)],
    actions: [...actions_template],
  })
  plop.setGenerator('plop', {
    description: 'criação de geradores de plop',
    prompts: [...(prompts_plop as any)],
    actions: [...actions_plop],
  })
}
