
/**
 * Returns a new object omitting the keys specified.
 *
 * @param {Array} keys Array of property names to omit from the new object.
 * @param {Object} obj The object to copy from.
 * @return {Object} A new object with properties from `keys` not on it.
 * @example
 *
 *
 **/

const omit = (keys, obj) => {
  const result = {}
  const index = keys.reduce((acc, cur, idx) => {
    acc[cur] = idx
    return acc
  }, {})
  
  Object.keys(obj).forEach(key => { if (!index.hasOwnProperty(key)) result[key] = obj[key] })
  return result
}

export default omit
