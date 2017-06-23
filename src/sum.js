
import add from './add'

/**
 * Adds together all the elements of a list.
 *
 * @param {Array} list An array of numbers.
 * @return {Number} The sum of all the numbers in the list.
 * @example
 *
 *  sum([1])  // 1
 *  sum([1, 1])  // 2
 *  sum([1, 2, 4])  // 7
 *  sum(['1', 2, 4])  // 7
 *  sum(['1', '2', '4'])  // 7
 *
 *  const sum10 = list => sum([...list, 10])
 *  sum10([1, 2, 4])  // 17
 *
 */

export default sum = list => list.reduce((p, c) => add(p, c), 0)
