
/**
 * Retrieve the value at a given path.
 *
 * @param {Array} path The path to use.
 * @param {Object} obj The object to retrieve the nested property from.
 * @return {*} The data at `path`.
 * @example
 *
 **/

const path = (path, obj) => {
  let result = Object.assign({}, obj)
  path.forEach((key, idx) => {
    if (result) result = result[path[idx]]
  })
  return result
}

export default path
