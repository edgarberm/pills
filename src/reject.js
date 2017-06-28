
import isArray from './isArray'
import filterObject from './filterObject'
import negate from './negate'

/**
 *  The opposite of `filter` this method returns the elements of `list` that `fn`
 *  does **not** return truthy for.
 *
 * @param {Object} obj The object to iterate over.
 * @param {Function} fn The predicate function invoked per iteration.
 * @return {Array} Returns the new filtered array.
 * @example
 *
 *   const obj = { 'a': 1, 'b': 2, 'c': 3, 'd': 4 }
 *   const arr = [1, 2, 3, 4]
 *   reject(obj, isEven)  // [1, 3]
 *   reject(arr, isEven)  // [1, 3]
 *
 *   const users = [
 *     { 'user': 'barney', 'active': true },
 *     { 'user': 'fred',   'active': false }
 *   ]
 *   reject(users, ({ active }) => active)  // [{ 'user': 'fred',   'active': false }]
 *
 */

const reject = (fn, list) => isArray(list) ? list.filter(negate(fn)) : filterObject(list, negate(fn))

export default reject
