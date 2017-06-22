
import isString from './isString'

/**
 *  Returns the nth element of the given list or string. If n is negative the
 *  element at index length + n is returned.
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

export default nth = (key, list) => (isArray(list))
                                    ? list.map(i => prop(key, i))
                                    : Object.values(list).map(o => prop(key, o))
