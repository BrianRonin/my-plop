import build from '../../config/formater'
import config from './settings'
import { Input } from './prompts'
import { PlopConf } from '../../types/config'
import transform_index from './template/transform/index'
import transform_mock from './template/transform/mock'
import transform_stories from './template/transform/stories'
import transform_styles from './template/transform/styles'
import transform_test from './template/transform/test'
import transform_type from './template/transform/types'
import transform_presets from './template/transform/presets'

type StartReturn = ReturnType<typeof config>

export default class Transform {
  public static Var: Input = {
    name: '',
    numbering: '0',

    group: '',
    html_element: 'div',
    props: '',
    has_group: false,
    has_html_element: false,
    has_props: false,
    has_turbo_repo: false,
    has_index: false,
    has_mock: false,
    has_stories: false,
    has_styles: false,
    has_test: false,
    has_types: false,
    has_chield: false,
    has_presets: false,
  }

  public static get start(): StartReturn {
    let resolve
    //@ts-ignore
    resolve = build(config(this.Var) as PlopConf)
    //@ts-ignore
    return resolve
  }

  static state(
    onlyChield: string,
    onlyArg: string,
    both: string,
    anything: string,
  ) {
    const isFunc = (x: any) =>
      typeof x === 'function' ? x() : x
    return this.Var.has_chield || this.Var.props
      ? this.Var.has_chield && this.Var.props
        ? isFunc(both)
        : this.Var.props
        ? isFunc(onlyArg)
        : isFunc(onlyChield)
      : isFunc(anything)
  }

  static index(doc: string) {
    return transform_index(doc, Transform)
  }

  static mock(doc: string) {
    return transform_mock(doc, Transform)
  }

  static stories(doc: string) {
    return transform_stories(doc, Transform)
  }

  static styles(doc: string) {
    return transform_styles(doc, Transform)
  }

  static test(doc: string) {
    return transform_test(doc, Transform)
  }

  static types(doc: string) {
    return transform_type(doc, Transform)
  }

  static presets(doc: string) {
    return transform_presets(doc, Transform)
  }
}
