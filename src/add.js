
/**
 * Adds some values.
 *
 * @param {...} args Numbers we want to add.
 * @return {Number} The result of the add of the two parameters.
 * @example
 *
 *  add(2, 3)  // 5
 *  add('2', 3)  // 5
 *  add(2, '3', 4)  // 9
 *  add('2', '3')  // 5
 *  add('aa', 3)  // NaN
 *
 *  const add5 = curry(add, 5)
 *  add5(2, 3, 4)  // 14
 *
 */

export default add = (...args) => args.reduce((p, c) => Number(p) + Number(c))
