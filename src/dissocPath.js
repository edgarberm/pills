
import assoc from './assoc'
import dissoc from './dissoc'
import isObject from './isObject'

/**
 * Returns a copy of the object by omitting the property of the specified path.
 *
 * @param {Array} path The path to the value to omit.
 * @param {Object} obj The object to clone.
 * @return {Object} A new object without the property at path.
 * @example
 *
 *   const obj = { a: { b: { c: { d: 100 } } } }
 *   dissocPath(['a', 'b', 'c', 'd'], obj)  // { a: { b: { c: {} } } }
 *
 **/

const dissocPath = (path, val, obj) => {
  const [head, ...tail] = path
  if (path.length === 1) return dissoc(head, obj)
  const key = obj[head]
  return isObject(key) ? assoc(head, dissocPath(tail, key), obj) : obj
}

export default dissocPath
