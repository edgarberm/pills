
import mean from './mean'

/**
 *  Returns the median of the given list of numbers.
 *
 * @param {Array} list
 * @return {Number}
 * @example
 *
 *  median([2, 9, 7])  // 7
 *  median([7, 2, 10, 9])  // 8
 *  median([1, 1, 2, 2])  // 1.5
 *  median([])  // NaN
 */

const median = list => {
  const { length } = list
  if (length === 0) return NaN

  const w = 2 - length % 2
  const i = (length - w) / 2
  return mean(Array.prototype.slice.call(list, 0)
                                   .sort((a, b) => a < b ? -1 : a > b ? 1 : 0)
                                   .slice(i, i + w))
}

export default median
