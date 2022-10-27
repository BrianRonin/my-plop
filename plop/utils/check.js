export function _check(
  obj,
  _match = {
    match: ['camelCase'],
    resolve: ['camelCase'],
  },
  ifNoMatch = 'no match',
  __regex = {
    regex: false,
    flags: '',
  },
) {
  let regex
  const __match = __regex.regex
    ? (input, match, isReplace) => {
        // console.log(
        //   JSON.stringify(match) + '<- match input-> ',
        // )
        // console.log(JSON.stringify(input))
        const _regex = __regex.regex.replace(
          '__match__',
          match,
        )
        regex = new RegExp(_regex, __regex.flags)
        return input.match(regex)
      }
    : false

  let resolve = {}
  Object.keys(obj).forEach(function (_key, _index) {
    let isMany = false
    let Resolve = (many, noMany) =>
      isMany ? many() : noMany()
    if (Array.isArray(obj[_key])) {
      isMany = true
      resolve[_key] = []
      for (const index in obj[_key]) {
        check(index)
      }
    } else {
      check()
    }
    function check(__index) {
      let output = []
      _match.match.forEach((match, index) => {
        Resolve(
          () => {
            output[_key] = []
            typeof _match.resolve === 'function'
              ? output.push(
                  _match.resolve({
                    isMany: true,
                    value: obj[_key][__index],
                    regex,
                    match: _match.match[index],
                    isMatch: __match
                      ? __match(
                          obj[_key][__index],
                          match,
                        ) &&
                        output.push(_match.resolve[index])
                      : obj[_key][__index].match(match) &&
                        output.push(_match.resolve[index]),
                    key: _key,
                    index: index,
                  }),
                )
              : __match
              ? __match(obj[_key][__index], match) &&
                output.push(_match.resolve[index])
              : obj[_key][__index].match(match) &&
                output.push(_match.resolve[index])
          },
          () => {
            typeof _match.resolve === 'function'
              ? output.push(
                  _match.resolve({
                    isMany: false,
                    value: obj[_key],
                    regex,
                    match: _match.match[index],
                    isMatch: __match
                      ? __match(obj[_key], match) &&
                        output.push(_match.resolve[index])
                      : obj[_key].match(match) &&
                        output.push(_match.resolve[index]),
                    key: _key,
                  }),
                )
              : __match
              ? __match(obj[_key], match) &&
                output.push(_match.resolve[index])
              : obj[_key].match(match) &&
                output.push(_match.resolve[index])
          },
        )
      })
      if (output[0]) {
        if (output.length > 1) {
          if (isMany) {
            resolve[_key][__index] = []
            output.forEach((output) => {
              resolve[_key][__index].push(output)
            })
          } else {
            resolve[_key] = []
            output.forEach((output) => {
              resolve[_key].push(output)
            })
          }
        } else {
          if (isMany) {
            resolve[_key] = []
            resolve[_key].push(output[0])
          } else {
            resolve[_key] = output[0]
          }
        }
      } else {
        if (isMany) {
          resolve[_key].push(
            ifNoMatch === 'it'
              ? obj[_key][__index]
              : ifNoMatch,
          )
        } else {
          resolve[_key] =
            ifNoMatch === 'it' ? obj[_key] : ifNoMatch
        }
      }
    }
  })
  return resolve
}

// const x = {
//   nome: 'camelCase jfo;aeifha;eli {{ camelCase }}',
//   sobrenome: 'properCase foa;eiyhfa;esjf;laesij',
//   cidades: ['Brasil', 'China', 'Canada'],
//   apelidos: [
//     {
//       key: '#',
//       value: 'apelido um {{ camelCase }} properCase',
//     },
//     { key: '_', value: 'apelido dois properCase' },
//   ],
// }

// const value_of_variables = (() => {
//   let output = []
//   const x = Object.keys(x)
//   return output
// })()

// console.log(
//   _check(
//     {
//       [x['apelidos'][1]['key']]: x['apelidos'][1]['value'],
//     },
//     {
//       match: ['camelCase', 'properCase'],
//       resolve: [['tem camel', 'tem tudo'], 'tem proper'],
//     },
//     'deu match em nada',
//     '{{ __match__ }}',
//   ),
// )
