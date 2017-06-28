
/**
 * Performs left-to-right function composition. Takes a list of one or more
 * functions and returns a new function.
 *
 * The new function takes the same number of arguments as the first function
 * it is given. It then, pipes those arguments through each function in the
 * list. It applies the first function to the arguments, passes its result to
 * the second function and so on.
 *
 * The result of the last function is the result of the pipe call.
 *
 * Note that this is exactly the same as `compose` but with the functions in
 * opposite order.
 *
 * {...Function} fn Functions to pipe.
 * @return {Function}
 * @example
 *
 *   const inc = n => n + 1
 *   const dbl = n => n * 2
 *   const sqr = n => n * n
 *   const operate = pipe(inc, dbl, sqr)
 *   operate(2)  // 36
 *   operate(5)  // 144
 *   operate(1)  // 16
 *
 *   // NOTE: same example but with `compose` produces different value.
 *   const operateCompose = compose(inc, dbl, sqr)
 *   operateCompose(1)  // 3
 *
 */

// const basePipe = (f, g) => (...args) => g(f(...args))
// const pipe = (...fn) => fn.reduce(basePipe)
const pipe = (...fn) => v => fn.reduce((g, f) => f(g), v)

export default pipe
