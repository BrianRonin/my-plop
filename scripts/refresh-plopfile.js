const fs = require('fs')

fs.copyFile(
  './dist/plopfile.mjs',
  './plopfile.mjs',
  (err) => {
    if (err) throw err
    console.log('Arquivo copiado com sucesso!')
  },
)
