import { cleanInput } from '../../utils/clean_input.js'

export class Variables {
  constructor() {
    this.variables = {}
    /**
     * { key: [
     * input = '' | [],
     * inputClean = '' | []
     * isMany = bool
     * ] }
     */
  }
  addvariables(key, input, isMany, divisor) {
    if (isMany) input = input.split(divisor)
    let inputClean = isMany
      ? input.map((v) => cleanInput(v))
      : cleanInput(input)
    this.variables[key] = {
      input: input,
      inputClean: inputClean,
      isMany: isMany,
    }
  }
  input(key) {
    return this.variables[key]['input']
  }
  inputClean(key) {
    return this.variables[key]['inputClean']
  }
}
