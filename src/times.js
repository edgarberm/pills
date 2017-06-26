
/**
 * Returns an Array containing the results of call an input function `n` times.
 * Note that `fn` is passed one argument: the current value of `n`.
 *
 * @param {Function} fn The function to invoke.
 * @param {Number} n Times to execute `fn`.
 * @return {Array} An array containing the return values of all calls to `fn`.
 * @example
 *
 *   const family = [
 *     { 'name': 'pilar', 'age': 20 },
 *     { 'name': 'alberto', 'age': 3 },
 *     { 'name': 'edgar', 'age': 30 }
 *     ]
 *
 *   const foo = n => family[n].name
 *   const baz = n => n
 *   times(foo, family.length)  // ['pilar', 'alberto', 'edgar']
 *   times(baz, 100))  // [0, 1, 2, ..., 99]
 *
 * */

const times = (fn, n) => Array.apply(null, { length: Number(n) }).map((_, i) => fn(i))
// NOTE: Shorter option
// const times = (fn, n) => Array.apply(null, Array(n)).map((_, i) => fn(i))

export default times
