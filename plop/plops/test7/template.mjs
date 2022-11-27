import build from '../config/formater.mjs'
import config from './settings.mjs'
import transform_index from './template/transform/index.mjs'
import transform_styles from './template/transform/styles.mjs'
import transform_mock from './template/transform/mock.mjs'

export default class Transform {
  static var = {
    name: '',
    
input_um_input_dois: '',
input_um_input_dois: '',input_um_input_dois: '',
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

  static index(doc) {
	return transform_index(doc, Transform)
}static styles(doc) {
	return transform_styles(doc, Transform)
}

static mock(doc) {
	return transform_mock(doc, Transform)
}
}
