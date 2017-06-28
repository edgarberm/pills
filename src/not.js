
/**
 * Returns the `!` of its argument. It will return `true` when passed falsy
 * value and `false` when passed a truly one.
 *
 * @param {*} x
 * @return {Boolean} the logical inverse of passed argument.
 * @example
 *
 *   not(true)  // false
 *   not(false)  // true
 *   not(0)  // true
 *   not(1)  // false
 *
 */

const not = x => !x

export default not
