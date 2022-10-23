import { $Component } from '../component_react/settings'

export function cleanInput(input) {
  for (let i = 0; i <= input.length; i++) {
    if (input[i].match(new RegExp($Component))) {
      return input.substring(i)
    }
  }
}
