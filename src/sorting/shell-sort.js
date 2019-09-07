module.exports = function sort(input) {
  let output = [].concat(input)
  let length = output.length
  let gap = length >> 1
  // let gap = 1
  // while (gap < length / 3 ) gap = 3 * gap + 1
  
  while (gap > 0) {
    for (let i = gap; i < length; i++) {
      for (let j = i; j >= gap && output[j] < output[j - gap]; j -= gap) {
        let tmp = output[j]
        output[j] = output[j - gap]
        output[j - gap] = tmp
      }
    }
    // gap = (gap / 3) >> 0
    gap = gap >> 1
  }

  return output
}
