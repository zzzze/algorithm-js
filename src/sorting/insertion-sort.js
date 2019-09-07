module.exports = function sort(input) {
  let output = [].concat(input)
  for (let i = 1; i < output.length; i++) {
    for (let j = i; j > 0 && output[j] < output[j - 1]; j--) {
        let tmp = output[j]
        output[j] = output[j - 1]
        output[j - 1] = tmp
    }
  }
  return output
}
