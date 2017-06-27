
/**
 * Returns if a value is falsy or not.
 *
 * Falsy values:
 * - false
 * - 0 (zero)
 * - "" (empty string)
 * - null
 * - undefined
 * - NaN (a special Number value meaning Not-a-Number!)
 *
 * @param {x} x The value to test.
 * @return {Boolean}
 * @example
 *
 *  falsy(false)  // true
 *  falsy(0)  // true
 *  falsy('')  // true
 *  falsy(null)  // true
 *  falsy(undefined)  // true
 *  falsy(NaN)  // true
 *  falsy(1)  // false
 *
 * */

const falsy = x => !(x)

export default falsy
