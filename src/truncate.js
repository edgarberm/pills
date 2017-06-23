
/**
 *  Truncate too long strings and add ellipsis to the end.
 *
 * @param {String} str String to trim.
 * @param {Number} max max number of characters.
 * @return {String} Truncated text.
 * @example
 *
 */

export default truncate = (str, max) => str.length > max ? `${ str.substr(0, max - 1) } ...` : str
