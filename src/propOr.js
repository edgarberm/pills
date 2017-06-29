
import has from './has'

/**
 * If the given object has an own property with the specified name, returns the
 * value of that property. Otherwise returns the provided default value.
 *
 * @param {*} def The default value.
 * @param {String} prop The name of the property to return.
 * @param {Object} obj Object to query.
 * @return {*} The value of given property of the supplied object or the default value.
 * @example
 *
 *   propOr('The default property value.', 'unit_price', product)  // "The default property value."
 *   propOr('The default property value.', 'price', product)  // 9.99
 *
 **/

const propOr = (def, prop, obj) => (obj !== null && has(prop, obj) ? obj[prop] : def)

export default propOr
