
/**
 * Returns a new array without the `n` elements of the given `list` or string.
 *
 * @param {Number} n
 * @param {Array|String} list
 * @return {Array}
 * @example
 *
 *   const arr = ['foo', 'bar', 'baz']
 *   drop(1, arr)  // ["bar", "baz"]
 *   drop(2, arr)  // ["baz"]
 *   drop(3, arr)  // []
 *
 **/


const drop = (n, list) => Array.prototype.slice.call(list, 0).slice(n, list.length)

export default drop
