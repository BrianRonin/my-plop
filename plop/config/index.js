import { Variables } from './class/Variables.js'
import { Match } from './class/Match.js'
import { mock_ } from './mock.js'
import { add_variables } from './functions/add_variables.js'
import { map_plop } from './functions/map.js'
import { formater_plop } from './functions/formater.js'

export const build_my_plop = (obj = mock_) => {
  const variables = new Variables()
  const match = new Match()
  add_variables(obj, variables)
  const molde = map_plop(obj, variables, match)
  const x = formater_plop(molde, variables)
}
build_my_plop()
