import { build_my_plop } from '../config/formater.js'
import { plop_config_components } from './settings.js'
import { transformComponent_index } from './ts/transform/index.js'
import { transformComponent_mock } from './ts/transform/mock.js'
import { transformComponent_stories } from './ts/transform/stories.js'
import { transformComponent_styles } from './ts/transform/styles.js'
import { transformComponent_test } from './ts/transform/test.js'

export class TransformComponent {
  static var = {
    hasChield: false,
    hasProps: false,
    hasMock: false,
    hasTest: false,
    hasGroup: false,
    hasStorybook: false,
    hasPropComponent: false,
    group: false,
    name: false,
    props: false,
    path: false,
  }
  static get start() {
    let resolve
    try {
      resolve = build_my_plop(
        plop_config_components(this.var),
      )
    } catch (e) {
      resolve = e
    }
    return resolve
  }

  static state(onlyChield, onlyArg, both, anything) {
    const isFunc = (x) =>
      typeof x === 'function' ? x() : x
    return this.var.hasChield || this.var.props
      ? this.var.hasChield && this.var.props
        ? isFunc(both)
        : this.var.props
        ? isFunc(onlyArg)
        : isFunc(onlyChield)
      : isFunc(anything)
  }

  static index(doc) {
    return transformComponent_index(doc, TransformComponent)
  }

  static styles(doc) {
    return transformComponent_styles(
      doc,
      TransformComponent,
    )
  }

  static test(doc) {
    return transformComponent_test(doc, TransformComponent)
  }

  static stories(doc) {
    return transformComponent_stories(
      doc,
      TransformComponent,
    )
  }

  static mock(doc) {
    return transformComponent_mock(doc, TransformComponent)
  }
}
