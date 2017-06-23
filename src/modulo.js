
/**
 *  Divides the first parameter by the second and returns the remainder.
 *
 * @param {Number} a The value to the divide.
 * @param {Number} b The pseudo-modulus.
 * @return {Number} The result of `b % a`.
 * @example
 *
 *  modulo(17, 3) // 2
 *  modulo(-17, 3); // -2 JavaScript behavior
 *  modulo(17, -3); // 2
 *
 */

export default modulo = (a, b) => a % b
