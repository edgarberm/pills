
/**
 *  Returns `true` if at least one of elements of the list match the predicate,
 *  `false` otherwise.
 *
 * @param {Function} fn Predicate function.
 * @param {Array} list Array to query.
 * @return {Boolean} `true` if at least one of elements of the list match the
 *                   predicate, `false` otherwise.
 * @example
 *
 *  const list = [0, 1, 2, 3]
 *  const list2 = [11, 2, 3, 14]
 *  const bigger10 = n => n > 10
 *
 *  any(bigger10, list)  // false
 *  any(bigger10, list2)  // true
 *
 */

export default any = (fn, list) => (list.length) ? list.some(fn) : false
