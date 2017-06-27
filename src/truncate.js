
/**
 *  Truncate a long strings to max num of characters and add ellipsis to the end.
 *
 * @param {String} str String to trim.
 * @param {Number} max max number of characters.
 * @param {String} ellipsis = '...' Ellipsis to close text.
 * @return {String} Truncated text.
 * @example
 *
 */

const truncate = (str, max, ellipsis = '...') => str.length > max ? `${ str.substr(0, max - 1) }${ ellipsis }` : str

export default truncate
