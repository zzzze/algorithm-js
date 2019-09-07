const test = require('ava')
const number_100_1 = require('../src/data/numbers_100_1')
const number_100_2 = require('../src/data/numbers_100_2')
const number_100_3 = require('../src/data/numbers_100_3')
const bubbleSort = require('../src/sorting/bubble-sort')
const selectionSort = require('../src/sorting/selection-sort')
const insertionSort = require('../src/sorting/insertion-sort')
const shellSort = require('../src/sorting/shell-sort')

test.beforeEach(t => {
  t.context.data = [
    number_100_1,
    number_100_2,
    number_100_3,
  ]
})

const testSortFn = (name, fn) => {
  test(`${name}`, t => {
    t.context.data.forEach(item => {
      let result = fn(item.input)
      t.deepEqual(result, item.output)
    })
  })
}

testSortFn('bubbleSort', bubbleSort)
testSortFn('selectionSort', selectionSort)
testSortFn('insertionSort', insertionSort)
testSortFn('shellSort', shellSort)
