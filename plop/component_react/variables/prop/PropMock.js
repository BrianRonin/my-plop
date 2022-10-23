import { caseModifiers } from '../../../utils/case_modifiers'
import { fileNames } from '../../config/fileNames'
import { $propComponent, userVariables } from '../../settings'
import { prop } from './Prop'

export class PropMock {
  constructor(_props, modifier_prop, modifier_prop_component) {
    this.props = _props.map((_prop, index) => {
      const prop = this.formater_propMock(_prop, index)
      return this.pu
    })
    this.modifier_prop = modifier_prop
    this.modifier_prop_component = modifier_prop_component
  }

  formater_propMock(_prop) {
    return _prop.match($propComponent)
      ? `${this.modifier_prop_component}: ${userVariables.mock},`
      : `// ${modifier_prop}: ,`
  }

  set(value) {
    value.map((x, i) => {
      let isComponent = isEmptyObject(propsComponent[i])
        ? `${e}: mock_${propsComponent[i].snakeCase},`
        : `// ${e}: ,`

      if (i === 0) {
        _props.length > 0
          ? _mock.push(`\n\t${isComponent}\n\t`)
          : _mock.push(`\n\t${isComponent}`)
      } else {
        _props.length === i + 1
          ? _mock.push(`\t${isComponent}`)
          : _mock.push(`\t${isComponent}\n`)
      }
    })
  }
},
