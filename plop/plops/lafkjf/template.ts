import build from '../../config/formater'
import config from './settings'
import { Input } from './prompts'
import { PlopConf } from '../../types/config'
import transform_alfkj from './template/transform/alfkj'

type StartReturn = ReturnType<typeof config>

export default class Transform {
  public static Var: Input = {
    name: '',
		lkfj: '',
		has_lkfj: false,
		has_alfkj: false,
  }

  public static get start(): StartReturn {
    let resolve
    //@ts-ignore
    resolve = build(config(this.Var) as PlopConf)
    //@ts-ignore
    return resolve
  }

	static alfkj(doc: string) {
		return transform_alfkj(doc, Transform)
	}
}
