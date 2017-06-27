
/**
 * Convert an object into a list of `[key, value]` pairs.
 *
 * @param {Object} obj Object to convert.
 * @return {Object} The new object.
 * @example
 *
 *   const values = { x: 1, y: 2, z: 3 }
 *   pairs(values)  // [["x", 1], ["y", 2], ["z", 3]
 *
 **/

const pairs = obj => {
  const keys = Object.keys(obj)
  const result = Array(length)
  keys.map((key, idx) => result[idx] = [keys[idx], obj[keys[idx]]])
  return result
}

export default pairs
