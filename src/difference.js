
import contains from './contains'

/**
 * Finds the set (i.e. no duplicates) of all elements in the first list not
 * contained in the second list. Objects and Arrays are compared in terms of
 * value equality, not reference equality.
 *
 * @param {Array} first The first list.
 * @param {Array} second The second list.
 * @return {Array} The elements in `first` that are not in `second`.
 * @example
 *
 *   difference([1,2,3,4], [7,6,5,4,3])  // [1, 2]
 *   difference([7,6,5,4,3], [1,2,3,4])  // [7, 6, 5]
 *
 **/

const difference = (first, second) => {
  const result = []
  first.forEach((item, idx) => {
    if (!contains(item, second) && !contains(item, result))
      result[idx] = item
  })
  return result
}

export default difference
