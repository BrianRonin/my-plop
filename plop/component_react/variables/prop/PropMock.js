import { caseModifiers } from '../../../utils/caseModifiers'
import { fileNames } from '../../config/fileNames'
import { $propComponent, userVariables } from '../../settings'
import { prop } from './Prop'

export class PropMock {
  constructor(_props) {
    this.props = _props.map((_prop, index) => {
      const prop = this.formater_propMock
    })
  }

  formater_propMock(_prop) {
    const prop = new caseModifiers(_prop)
    return _prop.match($propComponent)
      ? `${userVariables.nameComponent}: ${userVariables.mock}`
      : `${userVariables.prop}`
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
