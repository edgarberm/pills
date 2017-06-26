
/**
 * Returns a new list containing one copy of each unique element in the original
 * list filtered by `prop` parameter.
 *
 * Note that if the supplied function produces the same value on two items, prefers
 * the first item.
 *
 * @param {String|Function} prop A function or string (Object.pop) used to produce a
 *                               value to use during comparisons.
 * @param {Array} list The array to consider.
 * @return {Array} The list of unique items.
 * @example
 *
 *   const people = [
 *     { 'id': 1, 'name': 'edgar' },
 *     { 'id': 1, 'name': 'pilar' },
 *     { 'id': 1, 'name': 'pilar' },
 *     { 'id': 2, 'name': 'ivan' },
 *     { 'id': 2, 'name': 'inma' }
 *   ]
 *
 *   uniqBy('id', people)  // [{ 'id': 1, 'name': 'edgar' }, { 'id': 2, 'name': 'ivan'}]
 *   uniqBy('name', people)  // [{ 'id': 1, 'name': 'edgar' }, { 'id': 1, 'name': 'pilar' }, { 'id': 2, 'name': 'ivan'}, { 'id': 2, 'name': 'inma'}]
 *   uniqBy((o) => o.id, people)  // [{ 'id': 1, 'name': 'edgar' }, { 'id': 2, 'name': 'ivan'}]
 *
 * */


const uniqBy = (prop, list) => {
  const cb = typeof prop === 'function' ? prop : (o) => o[prop]
  return [...list.reduce((map, item) => {
    const key = cb(item);
    map.has(key) || map.set(key, item)
    return map
  }, new Map()).values()]
}

export default uniqBy
