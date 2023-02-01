import build from '../../config/formater'
import config from './settings'
import { Input } from './prompts'
import { PlopConf } from '../../types/config'
import transform_index from './template/transform/index'
import transform_styles from './template/transform/styles'
import transform_types from './template/transform/types'

type StartReturn = ReturnType<typeof config>

export default class Transform {
  public static Var: Input = {
    name: '',
		props: '',
		colors: '',
		has_props: false,
		has_colors: false,
		has_index: false,
		has_styles: false,
		has_types: false,
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

	static types(doc: string) {
		return transform_types(doc, Transform)
	}
}
