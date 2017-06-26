
/**
 * Replace a substring or regex match in a string with a replacement.
 *
 * @param {RegExp|String} pattern A regular expression or a substring to match.
 * @param {String} replace The string to replace the matches with.
 * @param {String} str The String to do the search and replacement in.
 * @return {String} The result.
 * @example
 *
 *   replace('foo', 'bar', 'foo foo foo')  // "bar foo foo"
 *   replace(/foo/, 'bar', 'foo foo foo')  // "bar foo foo"
 *   replace(/foo/g, 'bar', 'foo foo foo')  // "bar bar bar"
 * */

const replace = (regx, replace, str) => str.replace(regx, replace)

export default replace
