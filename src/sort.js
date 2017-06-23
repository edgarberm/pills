
/**
 * Returns a copy of the list, sorted according to the comparator function.
 *
 * Note that this is a copy of the list. It does not modify the original.
 *
 * @param {Function} fn A sorting (comparator) function.
 * @param {Array} list The list to sort.
 * @return {Array} A new Array with its elements sorted by the sorting function.
 * @example
 *
 *  const min = (a, b) => a > b
 *  const max = (a, b) => a < b
 *  sort(min, [4, 2, 7, 5,])
 *  sort(min, [100, 1024, 768, 960])
 *  sort(min, [3.1, 1.4, 1, 1.7])
 *  sort(max, [4, 2, 7, 5])
 *  sort(max, [100, 1024, 768, 960])
 */

export default sort = (fn, list) => Array.prototype.slice.call(list, 0).sort(fn)
