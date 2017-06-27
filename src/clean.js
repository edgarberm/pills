
import falsy from './falsy'

/**
 * Creates an array with all falsy values removed.
 * See falsy.
 *
 * @param {Array} list The array to clean.
 * @return {Array} The new cleaned array.
 * @example
 *
 *   const arr = [0, 1, false, null, undefined, 2, '', 3, '4', NaN]
 *   const cln = clean(arr)  // [1, 2, 3, "4"]
 *
 **/

const clean = list => list.filter(falsy)

export default clean
