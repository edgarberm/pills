
/**
 * Removes the sub-list of `list` starting at index `start` and containing
 * `count` elements.
 *
 * Note that this is a copy of the list. It does not modify the original.
 *
 * @param {Number} start The position to start removing elements.
 * @param {Number} count The number of elements to remove.
 * @param  {Array} list The list to remove from.
 * @return {Array} A new Array with `count` elements from `start` removed.
 * @example
 *
 *  const list = [1, 2, 3, 4, 5, 6, 7, 8]
 *  remove(2, 5, list)  // [1, 2, 8]
 *  remove(1, 1, list)  // [1, 3, 4, 5, 6, 7, 8]
 *
 */

export default remove = (start, count, list) => {
  const result = Array.prototype.slice.call(list, 0)
  result.splice(start, count)
  return result
}
