
/**
 * Check if the parameter is a Number or not.
 *
 * @param {*} value Object to test
 * @return {Boolean} Return `true` if value is a Number, `false` otherwise
 * @example
 *
 *  isNumber(1)  // true
 *  isNumber(123)  // true
 *  isNumber('123')  // false
 *  isNumber(true)  // false
 *  isNumber(false)  // false
 *  isNumber(NaN)  // true  NOTE: this is normal?!
 *  isNumber({})  // false
 *  isNumber([])  // false
 *  isNumber(() => {})  // false
 *
 */

export default isNumber = (value) => Object.prototype.toString.call(value) === '[object Number]'
