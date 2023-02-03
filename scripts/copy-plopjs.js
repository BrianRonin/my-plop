#!/usr/bin/env node
const fs = require('fs')
const path = require('path')

// const projectPackageJson = path.join(
//   process.cwd(),
//   'package.json',
// )
// const projectPackage = require(projectPackageJson)

// if (!projectPackage.scripts) {
//   projectPackage.scripts = {}
// }

// projectPackage.scripts['cpPlop'] =
//   'node ./node_modules/.bin/cp-plopjs.js'

// fs.writeFileSync(
//   projectPackageJson,
//   JSON.stringify(projectPackage, null, 2),
// )

// console.log(
//   `Adicionado task "npm run my-script" ao projeto.`,
// )

const plopfile = path.join(__dirname, '../plopfile.mjs')
const destPlopFile = path.join(
  process.cwd(),
  'plopfile.mjs',
)

fs.copyFile(plopfile, destPlopFile, (err) => {
  if (err) throw err
})

const plopFolder = path.join(__dirname, '../plop')
const destPlopFolder = path.join(process.cwd(), 'plop')

// cria a pasta destino, se não existir
if (!fs.existsSync(destPlopFolder)) {
  fs.mkdirSync(destPlopFolder)
}

async function hasHbsFile(dir) {
  return new Promise((resolve, reject) => {
    fs.readdir(dir, async (err, files) => {
      if (err) return reject(err)

      for (const file of files) {
        const filePath = path.join(dir, file)
        fs.stat(filePath, async (err, stats) => {
          if (err) return reject(err)

          if (stats.isDirectory()) {
            const result = await hasHbsFile(filePath)
            if (result) return resolve(true)
          } else if (path.extname(file) === '.hbs') {
            return resolve(true)
          }
        })
      }

      resolve(false)
    })
  })
}

// função para copiar pastas de forma recursiva
const copyFolderRecursive = async (source, destination) => {
  // lê o conteúdo da pasta de origem
  fs.readdir(source, (err, files) => {
    if (err) {
      throw err
    }

    // percorre cada item na pasta
    files.forEach((file) => {
      const currentSource = path.join(source, file)
      const currentDestination = path.join(
        destination,
        file,
      )

      // determina se o item é uma pasta ou arquivo
      fs.stat(currentSource, (err, stat) => {
        if (err) {
          throw err
        }

        // se for pasta, verifica se há arquivos .hbs
        if (stat.isDirectory()) {
          fs.readdir(currentSource, (err, subFiles) => {
            if (err) {
              throw err
            }

            // verifica se existe pelo menos um arquivo com extensão .hbs
            hasHbsFile(currentSource).then((hasHbsFile) => {
              if (hasHbsFile) {
                if (!fs.existsSync(currentDestination)) {
                  fs.mkdirSync(currentDestination, {
                    recursive: true,
                  })
                }
              }
              copyFolderRecursive(
                currentSource,
                currentDestination,
              )
            })

            // se houver arquivos .hbs, copia a pasta recursivamente
          })
        } else if (path.extname(file) === '.hbs') {
          // se for arquivo .hbs, copia para a pasta destino
          if (!fs.existsSync(currentDestination)) {
            fs.mkdirSync(
              path.join(currentDestination, '..'),
              {
                recursive: true,
              },
            )
          }

          fs.copyFileSync(currentSource, currentDestination)
        }
      })
    })
  })
}

// Chama a função de copiar pasta
try {
  copyFolderRecursive(plopFolder, destPlopFolder)
  console.log(
    `${plopFolder} was copied to ${destPlopFolder}`,
  )
} catch (err) {
  if (err) throw err
}
