
/**
 * Returns whether or not an object has an own property with the specified name.
 * A shortcut for Object.hasOwnProperty.
 *
 * @param {String} prop The (name of the) property to check for.
 * @param {Object} obj The object to query.
 * @return {Boolean} Return `true` if the property exists, `false` otherwise
 * @example
 *
 *   const product = {
 *     "id": 66443,
 *     "image": "aceb.png",
 *     "width": 965,
 *     "height": 1040,
 *     "description": "Description goes here!",
 *     "categories": ["4114","4232"],
 *     "brand": "Brand goes here!",
 *     "price": 9.99,
 *     "sub": {
 *       "a": 1000,
 *       "b": 2000
 *     }
 *   }
 *
 *   has('price', product)  // true
 *   has('description', product)  // true
 *   has('sub', product)  // true
 *   has('b', product.sub)  // true
 *
 *   const hasSubB = prod => has('b', prod.sub)
 *   hasSubB(product)  // true
 */

export default has = (prop, obj) => Object.prototype.hasOwnProperty.call(obj, prop)
