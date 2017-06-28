
/**
 *  Iterates over properties of an object `obj` returning an array of all
 *  elements `fn` (predicate) returns truthy for.
 *
 *  Note that the predicate is invoked with three arguments: `value`, `key`, `object`.
 *
 * @param {Object} obj The object to iterate over.
 * @param {Function} fn The predicate function invoked per iteration.
 * @return {Array} Returns the new filtered array.
 * @example
 *
 *   const object = { 'a': 5, 'b': 8, 'c': 10 }
 *   filterObject(object, (n) => !(n % 5))  // [5, 10]
 *
 */

const filterObject = (obj, fn) => Object.keys(obj).filter(key => fn(obj[key], key, obj) ? obj[key] : null)

export default filterObject
