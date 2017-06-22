# 💊 Pills
## A collection of fun Javascript functions 🌈😎

Study and implementation of the most useful functional programming functions
In JavaScript (ES6).


## Index

- [Add](#add) ✔️
- adjust
- [all](#all) ✔️
- [any](#any) ✔️
- append
- apply
- ascend
- assoc
- bind
- clamp
- cond
- [curry](#curry) ✔️
- find
- [has](#has) ✔️
- [hasIn](#hasin) ✔️
- [isArray](#isarray) ✔️
- isEmpty
- [isFunction](#isfunction) ✔️
- [isInteger](#isinteger) ✔️
- isNil
- [isNumber](#isnumber) ✔️
- [isObject](#isobject) ✔️
- isRegExp
- [isString](#isstring) ✔️
- last
- lastIndexOf
- [nth](#nth) ✔️
- [match](#match) ✔️
- max
- median
- memoize
- merge
- min
- modulo
- multiply
- pipe
- [pluck](#pluck) ✔️
- [prop](#prop) ✔️
- remove
- repeat
- replace
- reverse
- sort
- sortBy
- splitAt
- subtract
- [sum](#sum) ✔️
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


### add

Adds two values.

```javascript
add(2, 4)  // 6
add(5, 5)  // 10
add('5', 5)  // 10
add('5', '5')  // 10

curry(add)(2)(4)  // 6

const add2 = curry(add, 2)
add2(4)  // 6

const add2 = n => add(2, n)
add2(4)  // 6
```


### all

Returns `true` if all elements of the list match with the predicate, `false` otherwise.

```javascript
const list = [0, 1, 2, 3]
const list2 = [11, 12, 13, 14]
const bigger10 = n => n > 10

all(bigger10, list)  // false
all(bigger10, list2)  // true
```


### any

Returns `true` if at least one of elements of the list match the predicate,
`false` otherwise.

```javascript
const list = [0, 1, 2, 3]
const list2 = [11, 2, 3, 14]
const bigger10 = n => n > 10

any(bigger10, list)  // false
any(bigger10, list2)  // true
```


### curry

Returns a curried equivalent of the provided function.

```javascript
const add5 = curry(add, 5)
add5(2)  // 7
add5(100)  // 105

// NOTE: In this example curry don't make sense with ES6
const add5 = x => add(5, x)
add5(100)  // 105
```


### has

Returns whether or not an object has an own property with the specified name.
A shortcut for Object.hasOwnProperty.

**NOTE**: With a `Function` and ES6 `Class` objects the behavior is similar.

```javascript
const product = {
  "id": 66443,
  "image": "aceb.png",
  "width": 965,
  "height": 1040,
  "description": "Description goes here!",
  "categories": ["4114","4232"],
  "brand": "Brand goes here!",
  "price": 9.99,
  "sub": {
    "a": 1000,
    "b": 2000
  }
}

has('price', product)  // true
has('description', product)  // true
has('sub', product)  // true
has('b', product.sub)  // true

const hasSubB = prod => has('b', prod.sub)
hasSubB(product)  // true
```


### hasIn

Returns whether or not an object or its prototype chain has a property with
the specified name.

**NOTE**: With a `Function` and ES6 `Class` objects the behavior is similar.

```javascript
function Rect (width, height) {
  this.width = width
  this.height = height
}

Rect.prototype.area = function () {
  return this.width * this.height
}

const square = new Rect(2, 2)
hasIn('width', square)  // true
hasIn('area', square)  // true
hasIn('name', square)  // false


class Circle {
  constructor (r) {
    this.rad = r
  }

  get diameter () { return this.rad * 2 }
}

const circle = new Circle(20)
hasIn('rad', circle)  // true
hasIn('diameter', circle)  // true
hasIn('name', circle)  // false
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


### isInteger

Check if the parameter is an Integer or not.

```javascript
isInteger(1)  // true
isInteger(123)  // true
isInteger(1.23)  // false
isInteger('')  // false
isInteger('123')  // false
isInteger(true)  // false
isInteger(false)  // false
isInteger(NaN)  // false
isInteger([])  // false
isInteger(() => {})  // false
```


### isNumber

Check if the parameter is a Number or not.

```javascript
isNumber(1)  // true
isNumber(123)  // true
isNumber('123')  // false
isNumber(true)  // false
isNumber(false)  // false
isNumber(NaN)  // true  NOTE: this is normal?!
isNumber({})  // false
isNumber([])  // false
isNumber(() => {})  // false
```


### isObject

Check if the parameter is an Object or not.

```javascript
isObject({})  // true
isObject(1)  // false
isObject(123)  // false
isObject('123')  // false
isObject(true)  // false
isObject(false)  // false
isObject(NaN)  // false
isObject([])  // false
isObject(() => {})  // false
```


### isString

Check if the parameter is a String or not.

```javascript
isString('')  // true
isString('hello')  // true
isString('123')  // true
isString(1)  // false
isString(123)  // false
isString(true)  // false
isString(false)  // false
isString(NaN)  // false
isString([])  // false
isString(() => {})  // false
```


### match

Tests a regular expression against a String.
Note this method is similar to `R.match` https://github.com/ramda/ramda/blob/master/src/match.js

```javascript
match(/([a-z]a)/g, 'bananas') // ['ba', 'na', 'na']
match(/a/, 'b') // []
match(/a/, null) //=> TypeError: null does not have a method named "match"
```


### nth

Returns the nth element of the given list or string. If n is negative the
element at index length + n is returned.

```javascript
const list = ['foo', 'bar', 'baz', 'fooz']
nth(1, list)  // "bar"
nth(-1, list)  // "fooz"
nth(-99, list)  // `undefined`
nth(2, 'abc')  // "c"
nth(3, 'abc')  // ""
```


### pluck

Returns a new list by plucking the same named property off all objects in
the list supplied.

```javascript
pluck('a', [{a: 1}, {a: 2}])  // [1, 2]
pluck(0, [[1, 2], [3, 4]])  // [1, 3]
pluck('val', {a: {val: 3}, b: {val: 5}})  // [3, 5]
```


### prop

Returns the value of the property to check for or `undefined`.

**NOTE**: With a `Function` and ES6 `Class` objects the behavior is similar.

```javascript
const product = {
  "id": 66443,
  "image": "aceb.png",
  "width": 965,
  "height": 1040,
  "description": "Description goes here!",
  "categories": ["4114","4232"],
  "brand": "Brand goes here!",
  "price": 9.99,
  "sub": {
    "a": 1000,
    "b": 2000
  }
}

prop('price', product)  // 9.99
prop('description', product)  // "Description goes here!"
etProp('sub', product)  // Object { "a": 1000, "b": 2000 }
prop('b', prop('sub', product))  // 2000

const getPrice = prod => prop('price', prod)
getPrice(product)  // 9.99

const getSubB = prod => prop('b', prod.sub)
getSubB(product)  // 2000
```


### sum

Adds together all the elements of a list.

```javascript
sum([3])  // 3
sum([2, 3])  // 5
sum(['2', 3])  // 5
sum(['2', ,3])  // 5
sum([2, '3', 4])  // 9
sum(['2', '3'])  // 5
sum(['aa', 3])  // NaN
```

---

## TODO

- Add tests.
