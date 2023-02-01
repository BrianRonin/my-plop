import build from '../../config/formater'
import config from './settings'
import { Input } from './prompts'
import { PlopConf } from '../../types/config'
import transform_index from './template/transform/index'
import transform_styles from './template/transform/styles'

type StartReturn = ReturnType<typeof config>

export default class Transform {
  public static Var: Input = {
    name: '',
    props: '',
    mocks: '',
    has_props: false,
    has_mocks: false,
    has_index: '',
    has_styles: '',
  }

  public static get start(): StartReturn {
    let resolve
    //@ts-ignore
    resolve = build(config(this.Var) as PlopConf)
    //@ts-ignore
    return resolve
  }

  static index(doc: string) {
    return transform_index(doc, Transform)
  }

  static styles(doc: string) {
    return transform_styles(doc, Transform)
  }
}
