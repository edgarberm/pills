
/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds.
 *
 * @param {Function} fn The function to throttle.
 * @param {Number} wait Milliseconds to throttle invocations to.
 * @param {Object} options The options object.
 * @return {Function} Returns the new throttled function.
 * @example
 *
 *  window.addEventListener('resize', throttle(() => console.log('resizing') , 2000, { inmediate: true }))
 *
 **/

const throttle = (fn, wait = 0, options = {}) => debounce(fn, wait, options)

export default throttle
