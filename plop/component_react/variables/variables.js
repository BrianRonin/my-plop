import { prop } from './prop/Prop'

export class Component_Plop extends prop {
  constructor(choices = {}) {
    this.name = choices.name
    this.hasChield = choices.hasChield
    this.hasProps = choices.hasProps
    this.hasMock = choices.hasMock
    this.hasTest = choices.hasTest
    this.hasStorybook = choices.hasStorybook
  }

  get Prop
}