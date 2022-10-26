export class Match {
  constructor() {
    this.match = {}
    /**
     * {
     *  key: [
     *  match = '',
     *  value = 'variable' | ' {{}} ',
     *  caseModifier = 'Modifiers' | false
     * ] }
     * */
  }
  addmatch({
    key,
    match,
    variable,
    modifier,
    isIncrement,
  }) {
    this.match[key] = {
      isIncrement,
      match,
      variable,
      modifier,
    }
  }

  Match(
    key,
    _default = {
      value: '',
      modifier: '',
    },
    variables,
  ) {
    const input = variables.input(_default.value)
    const isMany = Array.isArray(input)
    return isMany
      ? input.reduce(
          (prev, input) => {
            const resolve = this._match(
              key,
              input,
              _default,
            )
            return {
              modifier: [
                resolve.modifier,
                ...prev.modifier,
              ],
              value: [resolve.value, ...prev.value],
              increment: [
                resolve.increment,
                ...prev.increment,
              ],
            }
          },
          {
            modifier: [],
            value: [],
            increment: [],
          },
        )
      : this._match(key, input, _default)
  }

  _match(key, input, _default) {
    const resolve = {
      modifier: _default.modifier,
      value: _default.value,
      increment: false,
    }
    this.match[key] &&
      this.match[key].match.map((match, match_i) => {
        if (this.match[key].isIncrement) {
          const _match_ = input.match(match)
          if (this.match[key].modifier[match_i]) {
            resolve.modifier = _match_
              ? this.match[key].modifier[match_i]
              : _default.modifier
          } else {
            resolve.modifier = _default.modifier
          }
          if (this.match[key].variable[match_i]) {
            resolve.value = _match_
              ? this.match[key].variable[match_i]
              : _default.value
          } else {
            resolve.increment = this.match[key].isIncrement
          }
        }
      })
    return resolve
  }
}
