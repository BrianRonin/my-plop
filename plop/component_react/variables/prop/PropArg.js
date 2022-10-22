import { caseModifiers } from '../../../utils/caseModifiers'
import { $propComponent } from '../../settings'
import { Prop } from './Prop'

export class PropArg {
  constructor(
    _props,
    modifier_prop,
    modifier_prop_component,
  ) {
    this.props = _props
      .map((_prop, index) => {
        const prop = this.formater_propArg(
          _prop,
          index,
        )
        return this.push_propArg(prop, index)
      })
      .join('')
    this.maxLength = _props.length
    this.modifier_prop = modifier_prop
      ? modifier_prop
      : 'camelCase'
    this.modifier_prop_component =
      modifier_prop_component
        ? modifier_prop_component
        : 'properCase'
  }

  formater_propArg(_prop) {
    const prop = new caseModifiers(_prop)
    return _prop.match($propComponent)
      ? prop.propperCase + 'Props'
      : prop.camelCase
  }

  push_propArg(prop, index) {
    const resolve = []
    Prop.prop_formater(
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
