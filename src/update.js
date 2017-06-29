
import adjust from './adjust'
import always from './always'

/**
 * Returns a copy of the array with the element at the provided index
 * replaced with the given value.
 *
 * Note that is the result to apply `always` method with the new value
 * as argument of the first parameter for the `adjust` method. 
 *
 * @param {Number} idx The index to update
 * @param {*} x The new value.
 * @param {Array} list The array to be updated.
 * @return {Array} A new array with the updated value.
 * @example
 *
 *   update(1, 'new', [1, 2, 3])  // [1, "new", 3]
 *
 **/

const update = (idx, x, list) => adjust(always(x), idx, list)

export default update
