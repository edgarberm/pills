
/**
 * Check if the parameter is a Function or not.
 *
 * @param {*} value Object to test
 * @return {Boolean} Return `true` if value is a Functin, `false` otherwise
 * @example
 *
 *  isFunction(curry)  // true
 *  isFunction(() => {})  // true
 *  isFunction(function () { return true })  // true
 *  isFunction(true)  // false
 *  isFunction(false)  // false
 *  isFunction(NaN)  // false
 *  isFunction({})  // false
 *  isFunction([])  // false
 *  isFunction(123)  // false
 *
 */

const isFunction = (value) => Object.prototype.toString.call(value) === '[object Function]'

export default isFunction
