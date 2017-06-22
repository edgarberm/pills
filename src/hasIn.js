
/**
 * Returns whether or not an object or its prototype chain has a property with
 * the specified name.
 *
 * Note that this method is similar as `has` with plain Objects, but he can
 * access to the prototype properties of the Function objects.
 *
 * @param {String} prop The (name of the) property to check for.
 * @param {Object} obj The object to query.
 * @return {Boolean} Return `true` if the property exists, `false` otherwise.
 * @example
 *
 *   NOTE: with a plain objects the behavior is similar to `has`.
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
 *
 *   class Circle {
 *     constructor (r) {
 *       this.name = 'Circle'
 *       this.rad = r
 *     }
 *
 *     get diameter () { return this.rad * 2 }
 *   }
 *
 *   const circle = new Circle(20)
 *   hasIn('rad', circle)  // true
 *   hasIn('diameter', circle)  // true
 *   hasIn('name', circle)  // true
 */

export default hasIn = (prop, obj) => prop in obj
