
/**
 * Converts the String parameter to lowercase and his first char to uppercase.
 *
 * @param {String} str The string to capitalize.
 * @return {String} The string capitalized.
 * @example
 *
 *  capitalize('lorem ipsum dolor sit amet')  // "Lorem ipsum dolor sit amet"
 *  capitalize('LOREM IPSUM DOLOR SIT AMET')  // "Lorem ipsum dolor sit amet"
 */

export default capitalize = str => {
  const lc = str.toLowerCase()
  return lc.charAt(0).toUpperCase() + lc.slice(1)
}
