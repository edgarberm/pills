
/**
 * Returns a new object according to the transformation functions.
 *
 * @param {Object} transforms The object specifying transformation functions to apply.
 * @param {Object} obj The object to be transformed.
 * @return {Object} The transformed object.
 * @example
 *
 *   const product = {
 *     "id": 66443,
 *     "image": "aceb.png",
 *     "width": 965,
 *     "height": 1040,
 *     "description": "Description goes here!",
 *     "categories": ["4114", "4232"],
 *     "brand": "Brand goes here!",
 *     "price": 9.99,
 *     "allergens": {
 *       "a": 'Allergen A',
 *       "b": 'Allergen B'
 *     }
 *   }
 *
 *   const renameCategory = a => `000_${ a }`
 *   const discount20 = t => '20% off!! ' + t
 *   const restoreRetina = h => h * 2
 *   const applyDiscount20 = p => p - percent(p, 20)
 *   const renameAllergen = t => `- ${ t }`
 *
 *   const transformations = {
 *     description: discount20,
 *     title: discount20,
 *     categories: [renameCategory, renameCategory],
 *     height: restoreRetina,
 *     price: applyDiscount20,
 *     allergens: {
 *       a: renameAllergen,
 *       b:renameAllergen
 *     }
 *   }
 *
 *   evolve(transformations, product)
 *   // {
 *   // "allergens": Object {
 *   //   "a": "- Allergen A",
 *   //   "b": "- Allergen B"
 *   // },
 *   // "brand": "Brand goes here!",
 *   // "categories": Object {
 *   //   "0": "000_4114",
 *   //   "1": "000_4232"
 *   // },
 *   // "description": "20% off!! Description goes here!",
 *   // "height": 2080,
 *   // "id": 66443,
 *   // "image": "aceb.png",
 *   // "price": 7.992,
 *   // "width": 965
 *   // }
 *
 **/

const evolve = (transforms, obj) => {
  const result = {}
  Object.keys(obj).forEach(key => {
    const transform = transforms[key]
    const type = typeof transform
    result[key] = type === 'function' ? transform(obj[key])
                                      : transform && type === 'object'
                                      ? evolve(transform, obj[key])
                                      : obj[key]
  })
  return result
}

export default evolve
