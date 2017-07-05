
/**
 * Limits the rate at which a function can fire.
 *
 * @param {Function} fn The function to debounce.
 * @param {Number} wait The number of milliseconds to delay.
 * @param {Object} options The options object.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * const debouncedResize = debounce((event) => {
 *   console.log('resized')
 * }, 1000)
 *
 * window.addEventListener('resize', debouncedResize)
 * window.addEventListener('resize', debounce(debouncedResize, 1000))
 *
 **/

const debounce = (fn, wait = 0, options = {}) => {
  let timeout

  return (...args) => {
    const inmediate = 'inmediate' in options ? !!options.inmediate : options.inmediate
    const later = () => {
      timeout = null
      if (!inmediate) fn.apply(this, args)
    }
    const now = inmediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if (now) fn.apply(this, args)
  }
}

export default debounce
