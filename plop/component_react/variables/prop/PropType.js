import { caseModifiers } from '../../../utils'
import { $propComponent, $propOptional } from '../../settings'
import { Prop } from './Prop'

export class PropType {
  constructor(_props) {
    this.props = _props.map((prop, index) => {
      const prop = this.formater_propType(_props, index)
      return this.push_propType(prop, index)
    }).join('')
    this.maxLength = _props.length
  }

  formater_propType(_prop) {
    const prop = new caseModifiers(_prop)
    let isComponent = _prop.match($propComponent)
      ? prop.propperCase + 'Props'
      : prop.camelCase
    let isOptional = _prop.match($propOptional)
      ? '?'
      : ''
    return isComponent + isOptional
  }

  push_propType(prop, index) {
    const resolve = []
    Prop.prop_formater(resolve, this.maxLength, index,
      `\n\t${prop}: any\n`,
      `\t${prop}: any\n`,
      `\t${prop}: any\n\t`,
      `\t${prop}: any\n\t`,
    )
    return resolve
  }
}
