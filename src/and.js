
/**
 * Returns `true` if both arguments are `true`; `false` otherwise.
 *
 * @param {*} a
 * @param {*} b
 * @return {*} the first argument if it is falsy, otherwise the second argument.
 * @example
 *
 *   and(true, true)
 *   and(true, false)
 *   and(false, false)
 *   and(false, false)
 *
 */

const and = (a, b) => a && b

export default and
