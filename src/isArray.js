
/**
 * Check if the parameter is an Array or not.
 *
 * @param {*} value Object to test
 * @return {Boolean} Return `true` if value is an Array, `false` otherwise
 * @example
 *
 *  isArray([])  // true
 *  isArray([1, 'yep', {a: 1, b: 2}])  // true
 *  isArray(true)  // false
 *  isArray(false)  // false
 *  isArray(NaN)  // false
 *  isArray({})  // false
 *
 */

const isArray = value => value != null &&
                         value.length >= 0 &&
                         Object.prototype.toString.call(value) === '[object Array]'

export default isArray
