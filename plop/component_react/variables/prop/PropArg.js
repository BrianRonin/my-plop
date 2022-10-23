import { array_formater } from '../../../utils/array_formater'
import { $propComponent } from '../../settings'

export class PropArg {
  constructor(
    _props,
    modifier_prop,
    modifier_prop_component,
  ) {
    this.props = _props
      .map((_prop, index) => {
        const prop = this.formater_propArg(_prop, index)
        return this.push_propArg(prop, index)
      })
      .join('')
    this.maxLength = _props.length
    this.modifier_prop = modifier_prop
    this.modifier_prop_component = modifier_prop_component
  }

  formater_propArg(prop, index) {
    return prop.match($propComponent)
      ? this.modifier_prop_component[index]
      : this.modifier_prop[index]
  }

  push_propArg(prop, index) {
    const resolve = []
    array_formater(
      resolve,
      this.maxLength,
      index,
      prop + ', ',
      prop + ', ',
      prop,
      prop,
    )
    return resolve
  }
}
