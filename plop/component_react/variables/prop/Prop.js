import { $Component, $propOptional } from '../../settings'
import { PropArg } from './propArg'

export class Prop {
  _prop = []

  get prop() {
    return this.prop ? this.prop : 'sem props'
  }

  static formater_prop(prop) {
    for (let i = 0;i <= prop.length;i++) {
      if (prop[i].match(new RegExp($Component))) {
        return resolve_prop = prop.substring(i)
      }
    }
  }

  set prop(_props = '') {
    const props = _props.split(',')
    props.map((_prop, index) => {
      const prop = this.formater_prop(_prop)
      this._prop.push(prop)
    })

    this.prop = {
      prop: this._prop,
      propArg: new PropArg(this._prop).propArg,
      PropType:
    }
  }

  static prop_formater(array, maxLength, index, start, between, end, onlyOne) {
    return index === 0 ?
      maxLength > 0
        ? array.push(start)
        : array.push(onlyOne)

      : maxLength === index + 1
        ? array.push(end)
        : array.push(between)
  }
}
