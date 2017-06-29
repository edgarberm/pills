
import concat from './concat'

/**
 * Applies a function to the value that is in the specified index and returns
 * a new array with the index element replaced by the result of the function.
 *
 * @param {Function} fn The function to apply.
 * @param {Number} idx The index.
 * @param {Array|Arguments} list An array-like object whose value
 *                               at the supplied index will be replaced.
 * @return {Array} A new object with only properties from `keys` on it.
 * @example
 *
 *   adjust(squared, 1, [1, 2, 3])  // [1, 4, 3]
 *
 **/

const adjust = (fn, idx, list) => {
  if (idx >= list.length || idx < -list.length) return list
  const start = idx < 0 ? list.length : 0
  const i = start + idx
  const l = concat([], list)
  l[i] = fn(list[i])
  return l
}

export default adjust
