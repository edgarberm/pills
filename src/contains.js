
/**
 * Returns `true` if the specified value is equal to at least one element of the
 * given list, `false` otherwise.
 *
 * @param {Object} x The item to compare against.
 * @param {Array} list The array to consider.
 * @return {Array} The list of unique items.
 * @example
 *
 *   contains(3, [1, 2, 3])  // true
 *   contains(4, [1, 2, 3])  // false
 *   contains(4, [1, 2, 3, 4])  // true
 **/

const contains = (x, list) => list.indexOf(x, 0) >= 0

export default contains
