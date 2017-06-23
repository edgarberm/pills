
/**
 *  Tests a regular expression against a String.
 *  Note this method is similar to `R.match` https://github.com/ramda/ramda/blob/master/src/match.js
 *
 * @param {RegExp} regx A regular expression.
 * @param {String} str The string to match.
 * @return {Array} The list of matches or empty array.
 * @example
 *
 *  match(/([a-z]a)/g, 'bananas') // ['ba', 'na', 'na']
 *  match(/a/, 'b') // []
 *  match(/a/, null) //=> TypeError: null does not have a method named "match"
 *
 */

export default match = (regx, str) => str.match(regx) || []
