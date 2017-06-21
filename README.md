# Toolz
## A collection of functional Javascript functions

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
- [curry](#curry) ✔️
- has
- indexOf
- [isArray](#isarray) ✔️
- isEmpty
- [isFunction](#isfunction) ✔️
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

Adds some values.

```javascript
add(2, 3)  // 5
add('2', 3)  // 5
add(2, '3', 4)  // 9
add('2', '3')  // 5
add('aa', 3)  // NaN

const add5 = curry(add, 5)
add5(2, 3, 4)  // 14
```

### Curry

Returns a curried equivalent of the provided function.

```javascript
const add5 = curry(add, 5)
add5(2)  // 7
add5(100)  // 105
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


### isFunction

Check if the parameter is a Function or not.

```javascript
isFunction(curry)  // true
isFunction(() => {})  // true
isFunction(function () { return true })  // true
isFunction(true)  // false
isFunction(false)  // false
isFunction(NaN)  // false
isFunction({})  // false
isFunction([])  // false
isFunction(123)  // false
```


## TODO

- Rename repo to `pills`.
- Add more tests.
