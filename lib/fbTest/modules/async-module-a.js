const asyncModuleB = require('./async-module-b')

const asyncModuleA = async (arg1, arg2) => {
  const val = await asyncModuleB(arg2)
  return val
}

module.exports = asyncModuleA
