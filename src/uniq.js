
/**
 * Returns a new list containing only one copy of each element in the original list.
 *
 * @param {Array} list The array to consider.
 * @return {Array} The list of unique items.
 * @example
 *
 *  uniq([1, 2, 1, 4, 1, 3])  // [1, 2, 4, 3]
 *  uniq(['a', 'b', 'c', 'a', 'd'])  // ["a", "b", "c", "d"]
 *
 * */


const uniq = list => [...new Set(list)]

export default uniq
