
import isString from '.isString'

/**
 * Returns a new list or string with the elements or characters in reverse
 * order.
 *
 * @param {Array|String} list
 * @return {Array|String}
 * @example
 *
 *   reverse([1, 2, 3, 4])  // [4, 3, 2, 1]
 *   reverse('abcde')  // "edcba"
 *
 * */

const reverse = list => isString(list)
                        ? list.split('').reverse().join('')
                        : Array.prototype.slice.call(list, 0).reverse()


export default reverse
