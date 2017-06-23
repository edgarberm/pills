
/**
 *  Returns `true` if no elements of the list match the predicate, `false` otherwise.
 *
 * @param {Function} fn Predicate function.
 * @param {Array} list Array to query.
 * @return {Boolean} `true` if the predicate is not satisfied by every element,
 *                   `false` otherwise.
 * @example
 *
 *  const list = [0, 1, 2, 3]
 *  const list2 = [11, 12, 13, 14]
 *  const bigger10 = n => n > 10
 *
 *  none(bigger10, list)  // true
 *  none(bigger10, list2)  // false
 *
 */

export default none = (fn, list) => (list.length) ? !list.every(fn) : true
