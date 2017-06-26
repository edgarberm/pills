
/**
 * Returns a function that always returns the given value.
 *
 * Ramda docs says:
 * Note that for non-primitives the value returned is a reference to the original value.
 * This function is known as `const`, `constant`, or `K` (for K combinator) in
 * other languages and libraries.
 *
 * @param {*} val The value to wrap in a function
 * @return {Function} A function that returns `val`.
 * @example
 *
 *   const t = always('lol')
 *   t()  // "lol"
 *
 * */

const always = val => () => val

export default always
