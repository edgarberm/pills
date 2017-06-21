# Toolz. A collection of functional Javascript functions

Study and implementation of the most useful functional programming functions
In JavaScript (ES6).


## Index

- [Add](#add) ✔️
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
- [isArray](#isarray) ✔️
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


---


### Add

Adds two values.

```javascript
add(2, 3)  // 5
curry(add)(10)(2)  // 12
```


### isArray

Check if the parameter is an Array or not.

```javascript
isArray([])  // true
isArray([1, 'yep', {a: 1, b: 2}])  // true
isArray(true)  // false
isArray(false)  // false
isArray(NaN)  // false
isArray({})  // false
```
