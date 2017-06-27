
/**
 * Returns the value of the property to check for or `undefined`.
 *
 * @param {String} prop The name of the property to check for.
 * @param {Object} obj The object to query.
 * @return {Boolean} Return `true` if the property exists, `false` otherwise
 * @example
 *
 *   NOTE: with a Function and Es6 Class objects the behavior is similar.
 *   See an example
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
 *   prop('price', product)  // 9.99
 *   prop('description', product)  // "Description goes here!"
 *   etProp('sub', product)  // Object { "a": 1000, "b": 2000 }
 *   prop('b', prop('sub', product))  // 2000
 *
 *   const getPrice = prod => prop('price', prod)
 *   getPrice(product)  // 9.99
 *
 *   const getSubB = prod => prop('b', prod.sub)
 *   getSubB(product)  // 2000
 *
 *   function Rect (width, height) {
 *     this.width = width
 *     this.height = height
 *   }
 *
 *   Rect.prototype.area = function () {
 *     return this.width * this.height
 *   }
 *
 *   const square = new Rect(2, 2)
 *   hasIn('width', square)  // true
 *   hasIn('area', square)  // true
 *   hasIn('name', square)  // false
 *
 */

const prop = (prop, obj) => obj[prop]

export default prop
