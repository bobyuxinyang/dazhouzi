#!/usr/local/bin/node

const fs = require('fs')
const path = require('path')

const allMD = path.join(process.cwd(), 'eposides/README.md')
fs.writeFileSync(allMD, '')
fs.appendFileSync(
  allMD, 
  '---\n  sidebar: false  \n---\n\n# 节目列表\n\n(本文件由`./util/scan.js`自动生成，请不要直接修改)\n\n'
  )

const scanAll = (pathName) => {
  const paths = fs.readdirSync(path.join(process.cwd(), pathName))
  paths.forEach(p => {
    const eposidePath = path.join(process.cwd(), pathName, p)
    const stat = fs.statSync(eposidePath)
    if (!stat.isDirectory()) {
      return
    }
    fs.appendFileSync(allMD, `* [${p}](/eposides/${encodeURI(p)}/)\n\n`)    
  })
}

scanAll('./eposides')
