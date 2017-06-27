
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
 *
 * */

const chunk = (list, size = 1) => {
  const chunks = []
  let idx = 0
  let len = list.length
  while (idx < len) chunks.push(list.slice(idx, idx += size))
  return chunks
}

export default chunk
