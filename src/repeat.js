
import times from './times'
import always from './always'

/**
 * Returns a fixed list of size `n` containing a specified identical value.
 *
 * @param {*} val The value to repeat.
 * @param {Number} n Size of the output list.
 * @return {Array} A new array containing `n` `val`s.
 * @example
 *
 *   const obj = {}
 *   const repObjs = repeat(obj, 3)
 *   repObjs  // [{}, {}, {}]
 *   repeat('str', 6)  // ['str', 'str', 'str', 'str', 'str', 'str']
 *
 * */

const repeat = (val, n) => times(always(val), n)
