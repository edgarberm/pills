
import capitalize from './capitalize'

/**
 * Converts `string` to camel case style.
 * See [camel case](https://en.wikipedia.org/wiki/CamelCase).
 *
 * Note that this is a copy of the `string`. It does not modify the original.
 *
 * @param {String} str The string to convert.
 * @return {String} The camel cased string.
 * @example
 *
 *  let baz = 'foo bar'
 *  let camel = camelCase(baz)
 *  console.log(camel)  // "fooBar"
 *  camelCase('foo bar')  // "fooBar"
 *  camelCase('FOO BAR')  // "fooBar"
 *  camelCase('x nN foo bar')  // "xNnFooBar"
 *  camelCase('!--foo-¿?-bar--121-**%')  // "fooBar121"
 *
 **/

const camelCase = str => {
  let string = str.toLowerCase().replace(/[^A-Za-z0-9]/g, ' ').split(' ')
                  .reduce((result, word) => result + capitalize(word.toLowerCase()))
  return string.charAt(0).toLowerCase() + string.slice(1)
}

export default camelCase
