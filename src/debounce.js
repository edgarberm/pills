
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

const debounce = (fn, wait = 250, options) => {
  let timeout

	return (...args) => {
		const later = () => {
			timeout = null
			if (!options) fn.apply(this, args)
		}
		const callNow = options && !timeout
		clearTimeout(timeout)
		timeout = setTimeout(later, wait)
		if (callNow) fn.apply(this, args)
	}
}

export default debounce
