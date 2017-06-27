
/**
 * Check if a number is a multiple of 2.
 *
 * @param {Number} n The first number in a division. Dividend.
 * @return {Boolean} `true` if is divisible or `false` otherwise.
 * @example
 *
 *   isOdd(1)  // false
 *   isOdd(2)  // true
 *   isOdd(120)  // true
 *   isOdd(113)  // false
 *
 **/

const isOdd = n => !(+n % 2)

export default isOdd
