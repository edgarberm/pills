
/**
 * Simple memoize function that takes in a function and returns a memoized function.
 *
 * @param {Function} fn Function to memoize.
 * @return {Function} Memoized function.
 * @example
 *
 *   const factorial = memoize((x) => {
 *     if (x === 0) {
 *       return 1
 *     } else {
 *       return x * factorial(x - 1)
 *     }
 *   })
 *
 *   factorial(5)  // calculate 5, 4, 3, 2, 1, 0 => 120
 *   factorial(6)  // calculate 6 and fetch from cache 5 => 720
 *
 **/

const memoize = fn => {
  const cache = {}

  return (...args) => {
    const n = args[0]  // just taking one argument here

    if (n in cache) {
      return cache[n]
    }
    else {
      const result = fn(n)
      cache[n] = result
      return result
    }
  }
}

export default memoize
