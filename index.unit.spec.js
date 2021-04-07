const test = require('tape')

const main = require('./index')

test('When requiring FBUtils', t => {
  const methodNames = Object.keys(main)

  t.ok(methodNames.includes('FBLogger'), 'it should export FBLogger method')
  t.ok(methodNames.includes('FBError'), 'it should export FBError method')
  t.ok(methodNames.includes('clone'), 'it should export clone method')
  t.ok(methodNames.includes('deepClone'), 'it should export deepClone method')

  t.end()
})
