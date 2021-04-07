const test = require('tape')

const {clone, deepClone} = require('./clone')

const testObj = {key: 'value', obj: {a: 1, b: 2}, arr: [3, 4]}
const testArr = [1, 2, {a: 3, b: 4}, [5, 6]]
const testTypes = {
  string: 'string value',
  number: 10,
  undefined: undefined,
  null: null
}

test('When cloning an object', t => {
  const input = testObj
  const output = clone(input)

  t.notEqual(output, input, 'it should create a clone of the object')
  t.deepEqual(output, input, 'it should clone the object correctly')
  t.equal(output.obj, input.obj, 'it should not clone key values which are objects')
  t.equal(output.arr, input.arr, 'it should not clone key values which are arrays')

  t.end()
})

test('When cloning an array', t => {
  const input = testArr
  const output = clone(input)

  t.notEqual(output, input, 'it should create a clone of the array')
  t.deepEqual(output, input, 'it should clone the array correctly')
  t.equal(output[2], input[2], 'it should not clone items which are objects')
  t.equal(output[3], input[3], 'it should not clone items which are arrays')

  t.end()
})

test('When cloning other types', t => {
  Object.keys(testTypes).forEach(type => {
    const input = testTypes[type]
    const output = clone(input)

    t.equal(output, input, `it should return the same value when passed ${type}`)
  })

  t.end()
})

test('When deep cloning an object', t => {
  const input = testObj
  const output = deepClone(input)

  t.notEqual(output, input, 'it should create a clone of the object')
  t.deepEqual(output, input, 'it should clone the object correctly')
  t.notEqual(output.obj, input.obj, 'it should clone key values which are objects')
  t.notEqual(output.arr, input.arr, 'it should clone key values which are arrays')

  t.end()
})

test('When deep cloning an array', t => {
  const input = testArr
  const output = deepClone(input)

  t.notEqual(output, input, 'it should create a clone of the array')
  t.deepEqual(output, input, 'it should clone the array correctly')
  t.notEqual(output[2], input[2], 'it should not clone items which are objects')
  t.notEqual(output[3], input[3], 'it should not clone items which are arrays')

  t.end()
})

test('When deep cloning other types', t => {
  Object.keys(testTypes).forEach(type => {
    const input = testTypes[type]
    const output = deepClone(input)

    t.equal(output, input, `it should return the same value when passed ${type}`)
  })

  t.end()
})
