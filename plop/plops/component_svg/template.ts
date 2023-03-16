import build from '../../config/formater'
import config from './settings'
import { Input } from './prompts'
import { PlopConf } from '../../types/config'
import transform_index from './template/transform/index'

type StartReturn = ReturnType<typeof config>

export default class Transform {
  public static Var: Input = {
    name: '',
    group: '',
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
}
