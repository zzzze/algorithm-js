module.exports = function sort(input) {
  let output = [].concat(input)
  for (let i = 0; i < output.length; i++) {
    for (let j = 0; j < output.length - (i + 1); j++) {
      if (output[j] > output[j + 1]) {
        let tmp = output[j]
        output[j] = output[j + 1]
        output[j + 1] = tmp
      }
    }
  }
  return output
}
