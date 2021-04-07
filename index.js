/**
 * @module FBUtils
 **/

const FBLogger = require('./lib/fbLogger/fbLogger')
const FBError = require('./lib/fbError/fbError')
const {clone, deepClone} = require('./lib/clone/clone')

module.exports = {
  FBLogger,
  FBError,
  clone,
  deepClone
}
