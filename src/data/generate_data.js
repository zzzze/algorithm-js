const fs = require('fs')
const path = require('path')

module.exports = function (count, uid) {
  let file = fs.createWriteStream(path.resolve(__dirname, `./numbers_${count}_${uid}.js`))
  let output = new Array(100).fill(0).map((_, index) => index + 1)
  let input = [].concat(output).sort(function() {
    return .5 - Math.random()
  })
  let data = 'module.exports = ' +  JSON.stringify({
    input,
    output,
  })
  file.write(data)
  file.end()
}
