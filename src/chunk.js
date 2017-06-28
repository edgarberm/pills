
/**
 * Creates an `array` of elements split into groups the length of `size`.
 * If `array` can't be split evenly, the final chunk will be the remaining
 * elements.
 *
 * @param {Array} list The array to process.
 * @param {Number} size The length of each chunk.
 * @return {Number} retirn the new array of chunks.
 * @example
 *
 *   chunk(1, ['a', 'b', 'c', 'd'])  // [["a"], ["b"], ["c"], ["d"]]
 *   chunk(2, ['a', 'b', 'c', 'd'])  // [["a" ,"b"], ["c", "d"]]
 *   chunk(3, ['a', 'b', 'c', 'd'])  // [["a", "b", "c"], ["d"]]
 *
 *
 * */

const chunk = (size = 1, list) => {
  const chunks = []
  let idx = 0
  let len = list.length
  while (idx < len) chunks.push(list.slice(idx, idx += size))
  return chunks
}

export default chunk
