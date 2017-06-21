# Toolz. A collection of functional Javascript functions

Study and implementation of the most useful functional programming functions
In JavaScript (ES6).


## Index

- [Add](#Add)
- adjust
- all
- and
- any
- append
- apply
- ascend
- assoc
- bind
- call
- clamp
- clone
- concat
- cond
- curry
- has
- indexOf
- isArguments
- isArray
- isArrayLike
- isEmpty
- isFunction
- isInteger
- isNil
- isNumber
- isObject
- isRegExp
- isString
- last
- lastIndexOf
- match
- max
- median
- memoize
- merge
- min
- modulo
- multiply
- pipe
- remove
- repeat
- replace
- reverse
- sort
- sortBy
- splitAt
- subtract
- sum
- tail
- take
- times
- toLower
- toPairs
- toUpper
- transpose
- trim
- type
- union
- uniq
- uniqBy
- update


### Add

Adds two values.

```javascript
/**
 * @param {Number} a
 * @param {Number} b
 * @return {Number} The result of the add of the two parameters.
 * @example
 *
 *  add(2, 3)  // 5
 *  add(7)(10)  // 17
 */

 const add = (a, b) => Number(a) + Number(b)
```
