module.exports = function sort(input) {
  let output = [].concat(input)
  for (let i = 0; i < output.length - 1; i++) {
    for (let j = i + 1; j < output.length; j++) {
      if (output[j] < output[i]) {
        let tmp = output[j]
        output[j] = output[i]
        output[i] = tmp
      }
    }
  }
  return output
}
