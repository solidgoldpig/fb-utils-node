/**
 * @module FBClone
 **/

/**
 * Clone an object (or value of any type)
 *
 * By default, a shallow copy is made
 *
 * @param {any} obj
 * Variable to clone
 *
 * @param {boolean} deep
 * Whether to create a deep copy
 *
 * @return {any}
 * Value of the same kind as passed
 **/
const clone = (obj, deep) => {
  if (deep) {
    return deepClone(obj)
  }
  if (typeof obj !== 'object') {
    return obj
  }
  if (obj === null) {
    return null
  }
  if (Array.isArray(obj)) {
    return obj.slice()
  }
  return Object.assign({}, obj)
}

/**
 * Deep clone an object (or value of any type)
 *
 * @param {any} obj
 * variable to clone
 *
 * @return {any}
 * Value of the same kind as passed
 **/
const deepClone = obj => {
  if (obj === undefined) {
    return obj
  }
  return JSON.parse(JSON.stringify(obj))
}

module.exports = {
  clone,
  deepClone
}
