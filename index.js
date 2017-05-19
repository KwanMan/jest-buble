const buble = require('buble')
const fs = require('fs')
const path = require('path')

let options = {}

try {
  const configLoc = path.resolve(process.cwd(), '.bublerc')
  options = JSON.parse(fs.readFileSync(configLoc))
} catch (e) {}

module.exports = {
  process: function process (src) {
    return buble.transform(src, options).code
  }
}
