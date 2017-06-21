
/**
 * Returns a curried equivalent of the provided function.
 *
 * @param {Function} fn The function to curry.
 * @param {*} args The function arguments.
 * @return {Function} The curried function.
 * @example
 *
 *  const add5 = curry(add, 5)
 *  add5(2)  // 7
 *  add5(100)  // 105
 *
 */

export default curry = (fn, ...args) => (...fnArgs) => fn.apply(this, [...args, ...fnArgs])
