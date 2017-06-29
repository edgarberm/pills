
/**
 * Returns a new object that does not contain a `prop` property.
 *
 * @param {String} key The name of the property to dissociate.
 * @param {Object} obj The object to clone.
 * @return {Object} A new object equivalent to the original but without the specified property.
 * @example
 *
 *   dissoc('b', { a: 1, b: 2 })  // { a: 1 }
 *   dissoc('price', product)  // { "brand": "Brand goes here!", ..., "width": 965 }
 *
 **/

const dissoc = (key, obj) => {
  const result = {}
  Object.keys(obj).forEach(k => result[k] = obj[k])
  delete result[key]
  return result
}

export default dissoc
