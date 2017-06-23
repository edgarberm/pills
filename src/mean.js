
import sum from './sum'

/**
 *  Returns the mean of the given list of numbers.
 *
 * @param {Array} list
 * @return {Number}
 * @example
 *
 *  mean([2, 7, 9]) // 6
 *  mean([]) // NaN
 *
 */

export default mean = list => sum(list) / list.length
