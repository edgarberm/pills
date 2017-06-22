
import isString from './isString'

/**
 *  Returns the nth element of the given list or string. If n is negative the
 *  element at `list[length - negate(i)]` is returned.
 *
 * @param {Number} offset
 * @param {*} list
 * @return {*}
 * @example
 *
 *  const list = ['foo', 'bar', 'baz', 'fooz']
 *  nth(1, list)  // "bar"
 *  nth(-1, list)  // "fooz"
 *  nth(-99, list)  // `undefined`
 *  nth(2, 'abc')  // "c"
 *  nth(3, 'abc')  // ""
 *
 */

export default nth = (offset, list) => {
  const i = offset < 0 ? list.length + offset : offset
  return isString(list) ? list.charAt(i) : list[i]
}
