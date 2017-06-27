
/**
 * Returns a function that is the composition of a list of functions, each
 * consuming the return value of the function that follows.
 *
 * @param {...Function} ...args The functions to compose.
 * @returns {Function} .
 * @example
 *
 *   const classyGreeting = (firstName, lastName) => "THE NAME'S " + lastName + ", " + firstName + " " + lastName
 *   const yellGreeting = compose(camelCase, classyGreeting)
 *   yellGreeting('JAMES', 'BOND')  // "theNameSBondJamesBond"
 *   
 **/

const compose = (...args) => {
  const start = args.length - 1
  return (...nArgs) => {
    let i = start
    let result = args[start].apply(this, nArgs)
    while (i--) result = args[i].call(this, result)
    return result
  }
}

export default compose
