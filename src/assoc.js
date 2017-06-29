
/**
 * Returns a copy of an object, setting or overriding the specified
 * property with the given value.
 *
 * Note that this copies and flattens prototype properties onto the new object as
 * well. All non-primitive properties are copied by reference.
 *
 * @param {String} key The property name to set.
 * @param {*} val The new value
 * @param {Object} obj The object to clone.
 * @return {Object} The new object equivalent to the original except for the changed property.
 * @example
 *
 *   assoc('c', 3, { a: 1, b: 2 })  // { a: 1, b: 2, c: 3 }
 *   assoc('b', 23, { a: 1, b: 2 })  // { a: 1, b: 23 }
 *   assoc('unit_price', '€', product)  // { "brand": "Brand goes here!", ..., "unit_price": "€", "width": 965 }
 *
 **/

const assoc = (key, val, obj) => {
  const result = {}
  Object.keys(obj).forEach(k => result[k] = obj[k])
  result[key] = val
  return result
}

export default assoc
