import {
  $Component,
  $propOptional,
  userVariables,
} from '../../settings'
import { PropArg } from './propArg'
import { PropType } from './PropType'

export class Prop {
  _prop = {}

  get prop() {
    return this._prop
  }

  formater_prop(prop) {
    for (let i = 0; i <= prop.length; i++) {
      if (prop[i].match(new RegExp($Component))) {
        return prop.substring(i)
      }
    }
  }

  push_prop(prop) {
    const resolve = []
    prop.split(',').map((_prop, index) => {
      const prop = this.formater_prop(_prop)
      resolve.push(prop)
    })
    return resolve
  }

  set prop(_props = '') {
    const { prop, propComponent } = userVariables
    const _prop = this.push_prop()

    this._prop = {
      prop: _prop,
      propArg: new PropArg(
        this.prop,
        prop[1],
        propComponent[1],
      ).propArg,
      PropType: new PropType(
        this.prop,
        prop[1],
        propComponent[1],
      ).propType,
    }
  }
}
