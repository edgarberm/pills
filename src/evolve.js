
/**
 * Returns a new object according to the transformation functions.
 *
 * @param {Object} transforms The object specifying transformation functions to apply.
 * @param {Object} obj The object to be transformed.
 * @return {Object} The transformed object.
 * @example
 *
 *
 **/

const evolve = (transforms, obj) => {
  const result = {}
  Object.keys(obj).forEach(key => {
    const transform = transforms[key]
    const type = typeof transform
    result[key] = type === 'function' ? transform(obj[key])
                                      : transform && type === 'object'
                                      ? evolve(transform, obj[key])
                                      : obj[key]
  })
  return result
}

export default evolve
