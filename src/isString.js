
/**
 * Check if the parameter is a String or not.
 *
 * @param {*} value Object to test
 * @return {Boolean} Return `true` if value is an String, `false` otherwise
 * @example
 *
 *  isString('')  // true
 *  isString('hello')  // true
 *  isString('123')  // true
 *  isString(1)  // false
 *  isString(123)  // false
 *  isString(true)  // false
 *  isString(false)  // false
 *  isString(NaN)  // false
 *  isString([])  // false
 *  isString(() => {})  // false
 *
 */

export default isString = (value) => Object.prototype.toString.call(value) === '[object String]'
