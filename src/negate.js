
/**
 *  Creates a function that negates the result of the predicate `func`.
 *
 *  TODO: review `this` 
 *
 * @param {Number} n
 * @return {Number}
 * @example
 *
 *  const list = [1, 2, 3, 4, 5, 6]
 *  list.filter(negate(isEven))  // [1, 3, 5]
 *
 */

const negate = fn => (...args) => !fn.apply(this, args)

export default negate
