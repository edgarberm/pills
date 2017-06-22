
import isArray from './isArray'
import prop from './prop'

/**
 *  Returns a new list by plucking the same named property off all objects in
 *  the list supplied.
 *
 * @param {Number|String} key The name to pluck off of each object.
 * @param {Array|Object} list Array or Object to query.
 * @return {Boolean} `true` if at least one of elements of the list match the
 *                   predicate, `false` otherwise.
 * @example
 *
 *  pluck('a', [{a: 1}, {a: 2}])  // [1, 2]
 *  pluck(0, [[1, 2], [3, 4]])  // [1, 3]
 *  pluck('val', {a: {val: 3}, b: {val: 5}})  // [3, 5]
 *
 */

export default pluck = (key, list) => (isArray(list))
                                    ? list.map(i => prop(key, i))
                                    : Object.values(list).map(o => prop(key, o))
