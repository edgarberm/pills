
/**
 * Returns a new array with the first `n` elements of the given `list` or string.
 *
 * @param {Number} n
 * @param {Array|String} list
 * @return {Array}
 * @example
 *
 *
 **/


const take = (n, list) => Array.prototype.slice.call(list, 0).slice(0, n)

export default take
