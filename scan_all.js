const fs = require('fs')
const path = require('path')

const allMD = path.join(__dirname, 'all.md')

fs.writeFileSync(allMD, '')

fs.appendFileSync(
  allMD, 
  '# 所有节目\n\n'
  )

const scanAll = (pathName) => {
  const paths = fs.readdirSync(path.join(__dirname, pathName))
  paths.forEach(p => {
    fs.appendFileSync(allMD, `## [${p}](/eposides/${encodeURI(p)}/)\n\n`)
    const eposidePath = path.join(__dirname, pathName, p)
    const files = fs.readdirSync(eposidePath)
    files.forEach(f => {
      const ext = path.extname(f)
      if (f !== 'README.md' && ext === '.md') {
        const fileName = f.split('.md')[0]
        fs.appendFileSync(allMD, `* [${fileName}](/eposides/${encodeURI(p)}/${encodeURI(fileName)}.html)\n`)
      }
    })
  })
}

scanAll('./eposides')
