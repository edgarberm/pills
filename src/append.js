
/**
 * Returns a new list containing the contents of the given list, followed by
 * the given element.
 *
 * @param {*} el The element to add to the end of the new list.
 * @param {Array} list The list of elements to add a new item to.
 * @return {Array} A new list containing the elements of the old list followed by `el`.
 * @example
 *
 *  append('code', ['read', 'write'])  // ['read', 'write', 'code']
 *  append('code', [])  // ['code']
 *  append(['code'], ['read', 'write'])  // ['read', 'write', ['code']]
 */

export default append = (el, list) => list.concat([el])
