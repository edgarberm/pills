
import isArray from './isArray'
import isString from './isString'

/**
 * Returns the result of concatenating the given lists or strings.
 *
 * @param {Array|String} f The first list or string.
 * @param {Array|String} s The second list or string.
 * @return {Array|String} A list or string consisting of the elements of `f`
 *                        followed by the elements of `s`.
 * @example
 *
 **/

const concat = (f, s) => {
  if (isArray(f)) {
    if (isArray(s)) {
      return f.concat(s)
    }
    throw new TypeError(s.toString() + ' is not an Array')
  }

  if (isString(f)) {
    if (isString(s)) {
      return f + s
    }
    throw new TypeError(s.toString() + ' is not a String')
  }

  throw new TypeError(f.toString() + ' does not have a method named "concat"')
}

export default concat
