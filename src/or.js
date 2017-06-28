
/**
 * Returns `true` if one or both of its arguments are `true`. Returns `false`
 * if both arguments are `false`.
 *
 * @param {*} a
 * @param {*} b
 * @return {*} the first argument if truthy, otherwise the second argument.
 * @example
 *
 *   or(true, true)  // true
 *   or(true, false)  // true
 *   or(false, false)  // true
 *   or(false, false)  // false
 *
 */

const or = (a, b) => a || b

export default or
