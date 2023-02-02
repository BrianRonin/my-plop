#!/usr/bin/env node
const fs = require('fs')
const path = require('path')

const projectPackageJson = path.join(
  process.cwd(),
  'package.json',
)
const projectPackage = require(projectPackageJson)

if (!projectPackage.scripts) {
  projectPackage.scripts = {}
}

projectPackage.scripts['cpPlop'] =
  'node ./node_modules/meu-modulo/.bin/cp-plopjs.js'

fs.writeFileSync(
  projectPackageJson,
  JSON.stringify(projectPackage, null, 2),
)

console.log(
  `Adicionado task "npm run my-script" ao projeto.`,
)

const file = path.join(__dirname, './dist/plopfile.mjs')
const dest = path.join(process.cwd(), 'plopfile.mjs')

fs.copyFile(file, dest, (err) => {
  if (err) throw err
  console.log(`${file} was copied to ${dest}`)
})
