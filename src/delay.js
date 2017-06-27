
/**
 * Invokes `fn` after `wait` milliseconds. Any additional arguments are
 * provided to `fn` when it's invoked.
 *
 * Number(wait) === +wait
 *
 * @param {Object} obj Object to convert.
 * @return {Object} The new object.
 * @example
 *
 *   delay(text => console.log(text), 1000, 'Text to log after 1000ms')
 *   delay(text => console.log(text), 3000, 'Text to log after 3000ms')
 *
 **/

const delay = (fn, wait, ...args) => setTimeout(fn, Number(wait) || 0, ...args)

export default delay
