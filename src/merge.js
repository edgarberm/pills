
/**
 *  Create a new object with the properties of the first object merged with
 *  the properties of the second object.
 *
 *  Note If a key exists in both objects, the value from the second object will
 *  be used.
 *
 * @param {Object} a First object.
 * @param {Object} b Second object.
 * @return {Object} The merged object.
 * @example
 *
 *  merge({ 'name': 'fred', 'age': 32 }, { 'employment': developer })
 *  // { "age": 32, "employment": "developer", "name": "fred" }
 *
 *  merge({ 'name': 'sue', 'age': 31 }, { 'employment': 'developer', 'age': 28 })
 *  // { "age": 28, "employment": "developer", "name": "sue" }
 *
 *  const resetX = o => merge(o, {x: 0})
 *  resetX({x: 5, y: 2})  // { "x": 0, "y": 2 }
 */

export default merge = (a, b) => Object.assign({}, a, b)
