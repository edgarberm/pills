
/**
 * Returns the results of applying the `fn` to each element of the object.
 * In contrast to _.map it returns an object.
 *
 * @param {Function} fn The function to apply.
 * @param {Object} obj Object on which iterate.
 * @return {Object} The new object.
 * @example
 *
 *   const prependKeyAndDouble = (num, key, obj) => key + (num * 2)
 *   const values = { x: 1, y: 2, z: 3 }
 *   mapObject(prependKeyAndDouble, values)  // { x: 'x2', y: 'y4', z: 'z6' }
 *
 **/

const mapObject = (fn, obj) => {
  const result = {}
  Object.keys(obj).map((key, idx) => result[key] = fn(obj[key], key, obj))
  return result
}

export default mapObject
