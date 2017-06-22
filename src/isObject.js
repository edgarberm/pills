
/**
 * Check if the parameter is an Object or not.
 *
 * @param {*} value Object to test
 * @return {Boolean} Return `true` if value is an Object, `false` otherwise
 * @example
 *
 *  isObject({})  // true
 *  isObject(1)  // false
 *  isObject(123)  // false
 *  isObject('123')  // false
 *  isObject(true)  // false
 *  isObject(false)  // false
 *  isObject(NaN)  // false
 *  isObject([])  // false
 *  isObject(() => {})  // false
 *
 */

export default isObject = (value) => Object.prototype.toString.call(value) === '[object Object]'
