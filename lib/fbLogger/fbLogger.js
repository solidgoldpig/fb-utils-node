/**
 * @module FBLogger
 **/

let verbose = false

/**
 * Drop-in for console.log
 *
 * Messages are never displayed if the environment variable ENVIRONMENT is set
 *
 * Messages are only displayed if the verbose flag has been set
 *
 * @param {array} msg
 *
 * Messages to output
 *
 * All messages are printed on a separate line
 *
 * Objects and arrays are jsonified
 *
 * @return {undefined}
 **/
const FBLogger = (...msg) => {
  if (!process.env.ENVIRONMENT && verbose) {
    const messages = msg.map(message => {
      if (typeof message === 'object') {
        return JSON.stringify(message, null, 2)
      }
      return message
    })
    process.stdout.write(`${messages.join('\n')}\n`)
  }
}

/**
 * Set logger verbosity
 *
 * @param {boolean} flag
 *
 * Whether logger should output messages
 *
 * @return {undefined}
 **/
FBLogger.verbose = (flag) => {
  verbose = flag
}

module.exports = FBLogger
