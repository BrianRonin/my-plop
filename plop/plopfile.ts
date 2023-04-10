import actions_plop from './generator/actions'
import prompts_plop from './generator/prompts'
import prompts_components from './plops/component_react/prompts'
import actions_components from './plops/component_react/actions'
import prompts_components_svg from './plops/component_svg/prompts'
import actions_components_svg from './plops/component_svg/actions'
import prompts_template from './plops/template_react/prompts'
import actions_template from './plops/template_react/actions'

import { NodePlopAPI } from 'plop'

export default function (plop: NodePlopAPI) {
  // plop generator code
  plop.setWelcomeMessage('Oque deseja criar?')

  plop.setGenerator('component/template react', {
    description:
      'criação de componentes/templates react com js/ts',
    prompts: [...(prompts_components as any)],
    actions: [...actions_components],
  })
  plop.setGenerator('component react svg', {
    description:
      'criação de componentes SVG react com js/ts',
    prompts: [...(prompts_components_svg as any)],
    actions: [...actions_components_svg],
  })
  plop.setGenerator('plop', {
    description: 'criação de geradores de plop',
    prompts: [...(prompts_plop as any)],
    actions: [...actions_plop],
  })
}
