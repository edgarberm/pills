
/**
 * Adds two values.
 *
 * @param {Number} a First value.
 * @param {Number} b Second value.
 * @return {Number} The result of the add of `a + b`.
 * @see sum
 * @example
 *
 *  add(2, 4)  // 6
 *  add(5, 5)  // 10
 *  add('5', 5)  // 10
 *  add('5', '5')  // 10
 *
 *  curry(add)(2)(4)  // 6
 *
 *  const add2 = curry(add, 2)
 *  add2(4)  // 6
 *
 *  const add2 = n => add(2, n)
 *  add2(4)  // 6
 */

export default add = (a, b) => Number(a) + Number(b)
