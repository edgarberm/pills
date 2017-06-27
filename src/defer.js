
/**
 * Defer a function, scheduling it to run after the current call stack hascleared.
 *
 * @param {Function} func The function to defer.
 * @param {*} [args] The arguments to invoke `fn` with.
 * @return {Number} Returns the timer id.
 * @example
 *
 *   defer(text => console.log(text), 'Deferred')
 *
 **/
const defer = (fn, ...args) => setTimeout(fn, 1, ...args)

export default defer
