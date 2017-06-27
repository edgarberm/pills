
/**
 *  Negates its argument.
 *
 * @param {Number} n
 * @return {Number}
 * @example
 *
 *  negate(1)  // -1
 *  negate(100)  // -100
 *  negate(63)  // -63
 *  negate(-63)  // 63
 *  negate(0)  // 0 - Because `0 === -0`
 *
 */

const negate = n => n === 0 ? 0 : -n

export default negate
