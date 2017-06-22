
/**
 * Subtracts its second argument from its first argument.
 *
 * @param {Number} a First value.
 * @param {Number} b Second value.
 * @return {Number} The result of the add of `a - b`.
 * @example
 *
 *  subtract(10, 5)  // 5
 *  subtract(10, 5, 1)  // 4
 *  subtract('10', 5)  // 5
 *  subtract(2, '3', 4)  // -5
 *  subtract('5', '5')  // 10
 *  subtract('aa', 3)  // NaN
 *
 *  curry(subtract)(4)(2)  // 2
 *
 *  NOTE: I need think on implemet placeholder Symbol or like to solve this.
 *  const subtract2 = curry(subtract, 2)
 *  subtract2(100)  // -98
 *  -subtract2(100)  // 98
 *
 *  const subtract2 = x => subtract(2, x)
 */

export default subtract = (a, b) => Number(a) - Number(b)
