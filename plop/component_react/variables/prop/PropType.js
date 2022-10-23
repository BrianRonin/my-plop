import {
  $propComponent,
  $propOptional,
} from '../../settings'
import { Prop } from './Prop'

export class PropType {
  constructor(
    _props,
    modifier_prop,
    modifier_prop_component,
  ) {
    this.props = _props
      .map((_prop, index) => {
        const prop = this.formater_propType(_prop, index)
        return this.push_propType(prop, index)
      })
      .join('')
    this.maxLength = _props.length
    this.modifier_prop = modifier_prop
    this.modifier_prop_component = modifier_prop_component
  }

  formater_propType(_prop) {
    let isComponent = _prop.match($propComponent)
      ? this.modifier_prop_component
      : this.modifier_prop
    let isOptional = _prop.match($propOptional) ? '?' : ''
    return isComponent + isOptional
  }

  push_propType(prop, index) {
    const resolve = []
    Prop.prop_formater(
      resolve,
      this.maxLength,
      index,
      `\n\t${prop}: any\n`,
      `\t${prop}: any\n`,
      `\t${prop}: any\n\t`,
      `\t${prop}: any\n\t`,
    )
    return resolve
  }
}
