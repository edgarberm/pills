
/**
 * Tests the final argument by passing it to the given predicate function.
 * If the predicate is true, the function will return the result of calling
 * the `when` function with the same argument. If the predicate is false,
 * the argument is returned.
 *
 * @param {Function} pred A predicate function.
 * @param {Function} when A function to invoke when the `condition`
 *                        evaluates to a truthy value.
 * @param {*} obj An object to test with the `pred` function and
 *                pass to `whenTrueFn` if necessary.
 * @return {*} Either `obj` or the result of applying `obj` to `when`.
 * @example
 *
 *   const truncate10 = str => truncate(str, 10)
 *   const isLarge = n => n.length > 10
 *   const truncateIf = text => when(isLarge, truncate10, text)
 *   truncateIf('0123456789Aeasd')  // "0123456789..."
 *
 **/

const when = (pred, when, obj) => pred(obj) ? when(obj) : obj

export default when
