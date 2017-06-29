
import assoc from './assoc'

/**
 * Returns a clone of an object, setting or overriding the nodes required
 * to create the given path, and placing the specific value at the tail end of
 * that path.
 *
 * Note that this copies and flattens prototype properties onto the new object as well.
 * All non-primitive properties are copied by reference.
 *
 * @param {Array} path the path to set.
 * @param {*} val The new value.
 * @param {Object} obj The object to clone.
 * @return {Object} A new object equivalent to the original except along the specified path.
 * @example
 *
 **/

const assocPath = (path, val, obj) => {
  const [head, ...tail] = path
  if (path.length > 1) val = assocPath(tail, val, obj[head] || {})
  return assoc(head, val, obj)
}

export default assocPath
