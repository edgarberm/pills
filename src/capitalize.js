
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

const capitalize = str => str.charAt(0).toUpperCase() + str.toLowerCase().slice(1)

export default capitalize
