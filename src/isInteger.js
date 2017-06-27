
/**
 * Check if the parameter is an Integer or not.
 *
 * @param {Number} value Numer to test
 * @return {Boolean} Return `true` if value is an Integer, `false` otherwise
 * @example
 *
 *  isInteger(1)  // true
 *  isInteger(123)  // true
 *  isInteger(1.23)  // false
 *  isInteger('')  // false
 *  isInteger('123')  // false
 *  isInteger(true)  // false
 *  isInteger(false)  // false
 *  isInteger(NaN)  // false
 *  isInteger([])  // false
 *  isInteger(() => {})  // false
 *
 */

const isInteger = (value) => (value << 0) === value

export default isInteger
