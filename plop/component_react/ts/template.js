import { build_my_plop } from '../../config/formater.js'
import { transformComponent } from '../actions.js'
import { plop_config_components } from '../settings.js'
import { transformComponent_index } from './transform/index.js'

export class TransformComponent {
  var = {
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
  get start() {
    return build_my_plop(plop_config_components(this.var))
  }

  state(onlyChield, onlyArg, both, anything) {
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

  index(doc) {
    return transformComponent_index(doc, transformComponent)
  }

  styles(x) {
    return x
  }

  test(x) {
    return x
  }

  stories(x) {
    return x
  }

  mock(x) {
    return x
  }
}
