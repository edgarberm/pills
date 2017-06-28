
import multiply from './multiply'

/**
 * Multiply a number `n` by itself.
 *
 * @param {Number} n
 * @return {Number}
 * @example
 *
 *   square(2)  // 4
 *   square(8)  // 64
 *   square(16)  // 256
 *
 */

const square = n => multiply(n, n)

export default square
