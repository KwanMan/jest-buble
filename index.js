const buble = require('buble')

function createProcess (bubleOptions) {
  return function process (src) {
    return buble.transform(src, bubleOptions).code
  }
}

module.exports = function create (bubleOptions) {
  return { process: createProcess(bubleOptions) }
}
module.exports.process = createProcess()
