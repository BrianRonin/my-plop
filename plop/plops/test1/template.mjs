import build from '../config/formater.mjs'
import config from './settings.mjs'
__import_transform__

export default class Transform {
  static var = {
    name: '',
  }

  static get start() {
    let resolve
    try {
      resolve = build(
        config(this.var),
      )
    } catch (e) {
      resolve = e
    }
    return resolve
  }

  __transform__
}
