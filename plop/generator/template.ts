import build from '../config/formater'
import config from './settings'
import transform_actions from './template/transform/actions'
import transform_filenames from './template/transform/filenames'
import transform_prompts from './template/transform/prompts'
import transform_settings from './template/transform/settings'
import transform_template from './template/transform/template'
import transform_generator from './template/transform/generator'
import transform_transform from './template/transform/transform'
import { Input } from './prompts'
import { PlopConf } from 'plop/types/config'

type StartReturn = ReturnType<typeof config>

export default class Transform {
  public static Var: Input = {
    files: '',
    hasInputs: false,
    inputs: '',
    name: '',
  }

  public static get start(): StartReturn {
    let resolve
    //@ts-ignore
    resolve = build(config(this.Var) as PlopConf)
    //@ts-ignore
    return resolve
  }

  static actions(doc: string) {
    return transform_actions(doc, Transform)
  }

  static filenames(doc: string) {
    return transform_filenames(doc, Transform)
  }

  static prompts(doc: string) {
    return transform_prompts(doc, Transform)
  }

  static settings(doc: string) {
    return transform_settings(doc, Transform)
  }

  static template(doc: string) {
    return transform_template(doc, Transform)
  }

  static generator(doc: string) {
    return transform_generator(doc, Transform)
  }

  static transform(doc: string) {
    return transform_transform(doc, Transform)
  }
}
