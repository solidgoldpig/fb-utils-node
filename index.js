/**
 * @module FBUtils
 **/

const FBLogger = require('./lib/fbLogger/fbLogger')
const FBError = require('./lib/fbError/fbError')
const FBTest = require('./lib/fbTest/fbTest')
const {clone, deepClone} = require('./lib/clone/clone')

module.exports = {
  FBLogger,
  FBError,
  FBTest,
  clone,
  deepClone
}
