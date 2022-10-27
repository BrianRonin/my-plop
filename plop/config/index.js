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
  // console.log('vvvvv match vvvvv')
  // console.log(match.match)
  // console.log('vvvvv molde vvvvv')
  // console.log(molde[0])
  // console.log('vvvvv variables vvvvv')
  // console.log(variables)
  formater_plop(molde, variables, obj)
  // let y = 'export_and_impot_mock'
  // console.log(
  //   variables.hooks.prop_mock[3].replace(
  //     `{{ -${y} }}`,
  //     'sim',
  //   ),
  // )
  // const x = variables.matchHooks()
  let y = '{{.*_match_.*}}'.replace(
    '_match_',
    'export_and_impot_mock',
  )
  let r = 'export_and_import_mock'
  let i = new RegExp(r, 'g')
  console.log(
    (() => {
      const output = []
      const keys = Object.keys(variables.hooks)
      Object.keys(variables.hooks).forEach((k) => {
        console.log(
          variables.hooks['title'].replace(
            `{{ -${r} }}`,
            'sim',
          ),
        )
      })
    })(),
  )
  console.log(
    variables.hooks['title'].replace(
      '{{ ' + i + ' }}',
      'sim',
    ),
  )
  variables.matchHooks()
}
build_my_plop()
