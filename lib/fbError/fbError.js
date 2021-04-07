/**
 * @module FBError
 **/

class FBError extends Error {
  /**
   * FBError constructor
   *
   * @param {string} msg
   * Error message
   *
   * If not passed, will use any value found in options.error.message
   *
   * @param {{error: object, data: any}} options
   * Error options
   *
   * @param {object} options.error
   * Error object or plain object representing an error
   *
   * @param {any} options.data
   * Additional data to attach to the returned error
   *
   * @return {FBError}
   **/
  constructor (msg, options = {}) {
    if (typeof msg === 'object') {
      options = msg
      msg = undefined
    }
    const {error, data} = options
    super(error)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor)
    }
    this.name = this.constructor.name
    this.message = msg || options.message
    if (error) {
      Object.keys(error).forEach(prop => {
        this[prop] = error[prop]
      })
    }
    if (data) {
      this.data = data
    }
  }
}

module.exports = FBError
