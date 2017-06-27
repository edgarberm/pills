
/**
 * Returns the number of arguments accepted by the given function `fn`
 *
 * @param {Function} fn The function to test.
 * @return {Number} The number of arguments.
 * @example
 *
 *   const foo = (a, b, c) => a + b + c
 *   const bar = (a, {}) => { a: a }
 *   arity(foo)  // 3
 *   arity(bar)  // 2
 *
 * */

const arity = fn => fn.length

export default arity
