
/**
 * Returns a random number in a specified range (min and max inclusive).
 *
 * @param {Number} min Min value.
 * @param {Number} max Max value.
 * @return {Number} The random value.
 * @example
 *
 *  randomBetween(100, 0)  // 54
 *  randomBetween(100, 0)  // 81
 *  randomBetween(100, 0)  // 29
 *  randomBetween(-20, 100)  // 59
 *  randomBetween(-100, 100)  // -18
 */

const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1))

export default randomBetween
