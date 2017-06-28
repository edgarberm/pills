
/**
 * Checks if `value` is `null` or `undefined`.
 *
 * @param {*} value The value to check.
 * @return {Number}
 * @example
 *
 *   isNil(null)  // true
 *   isNil(undefined)  // true
 *   isNil(NaN)  // false
 *   isNil(0)  // false
 *
 */

const isNil = value => value == null

export default isNil
