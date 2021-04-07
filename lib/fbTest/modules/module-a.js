const moduleB = require('./module-b')

const moduleA = (arg1, arg2) => {
  return moduleB(arg2)
}

module.exports = moduleA
