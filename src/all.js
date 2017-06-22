
/**
 *  Returns `true` if all elements of the list match with the predicate, `false` otherwise.
 *
 * @param {Function} fn Predicate function.
 * @param {Array} list Array to query.
 * @return {Boolean} `true` if all elements of the list match with the predicate,
 *                   `false` otherwise.
 * @example
 *
 *  const list = [0, 1, 2, 3]
 *  const list2 = [11, 12, 13, 14]
 *  const bigger10 = n => n > 10
 *
 *  all(bigger10, list)  // false
 *  all(bigger10, list2)  // true
 *
 */

export default all = (fn, list) => (list.length) ? list.every(fn) : false
