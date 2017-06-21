
/**
 * Adds two values.
 *
 * @param {Number} a
 * @param {Number} b
 * @return {Number} The result of the add of the two parameters
 * @example
 *
 *  add(2, 3)  // 5
 *  add('2', 3)  // 5
 *  add('2', '3')  // 5
 *  add('aa', 3)  // NaN
 */

export default add = (a, b) => Number(a) + Number(b)
