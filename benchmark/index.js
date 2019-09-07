const {Suite} = require('benchmark')
const add = require('../index')
const numbers_100_1 = require('../src/data/numbers_100_1')
const numbers_100_2 = require('../src/data/numbers_100_2')
const numbers_100_3 = require('../src/data/numbers_100_3')
const numbers_1000_1 = require('../src/data/numbers_1000_1')
const numbers_1000_2 = require('../src/data/numbers_1000_2')
const numbers_1000_3 = require('../src/data/numbers_1000_3')
const bubbleSort = require('../src/sorting/bubble-sort')
const selectionSort = require('../src/sorting/selection-sort')
const insertionSort = require('../src/sorting/insertion-sort')
const shellSort = require('../src/sorting/shell-sort')

let suite = new Suite

let invokeFunc = fn => {
  fn(numbers_100_1.input)
  fn(numbers_100_2.input)
  fn(numbers_100_3.input)
  fn(numbers_1000_1.input)
  fn(numbers_1000_2.input)
  fn(numbers_1000_3.input)
}

suite.add('bubble-sort   ', function() {
  invokeFunc(bubbleSort)
})
suite.add('selection-sort', function() {
  invokeFunc(selectionSort)
})
suite.add('insertion-sort', function() {
  invokeFunc(insertionSort)
})
suite.add('shell-sort    ', function() {
  invokeFunc(shellSort)
})

suite.on('cycle', function(event) {
  console.log(String(event.target))
})

suite.on('complete', function() {
  console.log('Test completed')
  console.log('Fastest is ' + this.filter('fastest').map('name'))
})

suite.run({ 'async': true })
