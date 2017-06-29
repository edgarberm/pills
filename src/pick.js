
/**
 * Reads an array with multiple properties from an object and returns a partial
 * copy of an object with just those properties specified. If the key does not
 * exist, the property is ignored.
 *
 * @param {Array} keys an array of String property names to copy onto a new object.
 * @param {Object} obj The object to copy from.
 * @return {Object} A new object with only properties from `keys` on it.
 * @example
 *
 *   pick(['a', 'd'], { a: 1, b: 2, c: 3, d: 4 })  // { a: 1, d: 4 }
 *   pick(['a', 'e', 'f'], { a: 1, b: 2, c: 3, d: 4 })  // { a: 1 }
 *   pick(['user'], { user: 'Bob', id: 2, age: 36 })  // { user: "Bob" }
 *
 **/

const pick = (keys, obj) => {
  const result = {}
  Object.keys(obj).map((key, idx) => {
    if (keys[idx] in obj) result[keys[idx]] = obj[keys[idx]]
  })
  return result
}


export default pick
