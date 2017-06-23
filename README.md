# 💊 Pills
## A collection of fun JavaScript functions (ES6) 😎🎉🎈

Study and implementation of the most useful and fun JavaScript functions (ES6).


## Index

- [Add](#add)
- [all](#all)
- [any](#any)
- [append](#append)
- apply
- ascend
- assoc
- bind
- [capitalize](#capitalize)
- clamp
- cond
- [curry](#curry)
- find
- [has](#has)
- [hasIn](#hasin)
- [isArray](#isarray)
- isEmpty
- [isFunction](#isfunction)
- [isInteger](#isinteger)
- isNil
- [isNumber](#isnumber)
- [isObject](#isobject)
- isOdd
- isRegExp
- [isString](#isstring)
- last (nth(-1))
- lastIndexOf
- [match](#match)
- [max](#max)
- [mean](#mean)
- [median](#median)
- memoize
- [merge](#merge)
- [min](#min)
- [modulo](#modulo)
- [multiply](#multiply)
- [negate](#negate)
- [none](#none)
- [nth](#nth)
- [percent](#percent)
- [pluck](#pluck)
- [prop](#prop)
- [remove](#remove)
- repeat
- replace
- reverse
- [sort](#sort)
- [sortBy](#sortby)
- splitAt
- [subtract](#subtract)
- [sum](#sum)
- tail
- take
- times
- toPairs
- transpose
- trim
- [truncate](#truncate)
- type
- union
- uniq
- update


---

## Documentation

Please review the documentation.


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


### append

Returns a new list containing the contents of the given list, followed by
the given element.

```javascript
append('code', ['read', 'write'])  // ['read', 'write', 'code']
append('code', [])  // ['code']
append(['code'], ['read', 'write'])  // ['read', 'write', ['code']]
```


### capitalize

Converts the String parameter to lowercase and his first char to uppercase.

```javascript
capitalize('lorem ipsum dolor sit amet')  // "Lorem ipsum dolor sit amet"
capitalize('LOREM IPSUM DOLOR SIT AMET')  // "Lorem ipsum dolor sit amet"
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

Note that this method is similar as `hasIn` with plain Objects, but he can't
access to the prototype properties of the Function objects.

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

Note that this method is similar as `has` with plain Objects, but he can
access to the prototype properties of the Function objects.

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


### max

Returns the larger argument.

```javascript
max(8765, 1224) // 8765
max('a', 'b'); // 'b'
```


### mean

Returns the mean of the given list of numbers.

```javascript
mean([2, 7, 9]) // 6
mean([]) // NaN
```


### median

Returns the median of the given list of numbers.

```javascript
median([2, 9, 7])  // 7
median([7, 2, 10, 9])  // 8
median([1, 1, 2, 2])  // 1.5
median([])  // NaN
```


### merge

Create a new object with the properties of the first object merged with
the properties of the second object.

Note If a key exists in both objects, the value from the second object will
be used.

```javascript
merge({ 'name': 'fred', 'age': 32 }, { 'employment': developer })
// { "age": 32, "employment": "developer", "name": "fred" }

merge({ 'name': 'sue', 'age': 31 }, { 'employment': 'developer', 'age': 28 })
// { "age": 28, "employment": "developer", "name": "sue" }

const resetX = o => merge(o, {x: 0})
resetX({x: 5, y: 2})  // { "x": 0, "y": 2 }
```


### min

Returns the smaller argument.

```javascript
min(8765, 1224) // 1224
min('a', 'b'); // 'a'
```


### modulo

Divides the first parameter by the second and returns the remainder.

```javascript
modulo(17, 3) // 2
modulo(-17, 3); // -2 JavaScript behavior
modulo(17, -3); // 2
```


### multiply

Multiplies two numbers. Equivalent to `a * b`.

```javascript
multiply(2, 5)  // 10

const double = n => multiply(n, 2)
const triple = n => multiply(n, 3)
double(3)  // 6
triple(3)  // 9
```


### negate

Negates its argument.

```javascript
negate(1)  // -1
negate(100)  // -100
negate(63)  // -63
negate(-63)  // 63
negate(0)  // 0 - Because `0 === -0`
```


### none

Returns `true` if no elements of the list match the predicate, `false` otherwise.

```javascript
const list = [0, 1, 2, 3]
const list2 = [11, 12, 13, 14]
const bigger10 = n => n > 10

none(bigger10, list)  // true
none(bigger10, list2)  // false
```


### nth

Returns the nth element of the given list or String. If `n` is negative the
element at `list[length - negate(i)]` is returned.

```javascript
const list = ['foo', 'bar', 'baz', 'fooz']
nth(1, list)  // "bar"
nth(-1, list)  // "fooz"
nth(-99, list)  // `undefined`
nth(2, 'abc')  // "c"
nth(3, 'abc')  // ""
```


### percent

Calculate the percentage `%` of a value. The firs parameter is the value and the
second parameter is the percentage to calculate.

```javascript
percent(100, 50)  // 50
percent(30, 20)  // 6
percent(9.99, 10) // 0.9990000000000001

const percent50 = value => percent(value, 50)
percent50(100)  // 50
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


### remove

Removes the sub-list of `list` starting at index `start` and containing
`count` elements.

Note that this is a **copy** of the list. It does not modify the original.

```javascript
const min = (a, b) => a > b
const max = (a, b) => a < b
sort(min, [4, 2, 7, 5,])
sort(min, [100, 1024, 768, 960])
sort(min, [3.1, 1.4, 1, 1.7])
sort(max, [4, 2, 7, 5])
sort(max, [100, 1024, 768, 960])
```


### sort

Returns a copy of the list, sorted according to the comparator function.

Note that this is a **copy** of the list. It does not modify the original.

```javascript
const min = (a, b) => a > b
const max = (a, b) => a < b
sort(min, [4, 2, 7, 5,])
sort(min, [100, 1024, 768, 960])
sort(min, [3.1, 1.4, 1, 1.7])
sort(max, [4, 2, 7, 5])
sort(max, [100, 1024, 768, 960])
```


### sortBy

Returns a copy of the list, sorted by provided key according to the
comparator function.

Note that this is a **copy** of the list. It does not modify the original.

```javascript
const users = [
  { 'user': 'ed',   'age': 36 },
  { 'user': 'fer', 'age': 34 },
  { 'user': 'ivan',   'age': 35 },
  { 'user': 'inma', 'age': 32 }
]

sortBy('age', users, parseInt, false)
// [
//   { 'user': 'inma', 'age': 32 },
//   { 'user': 'fer', 'age': 34 },
//   { 'user': 'ivan',   'age': 35 },
//   { 'user': 'ed',   'age': 36 }
// ]
```


### subtract

Subtracts its second argument from its first argument.

```javascript
subtract(10, 5)  // 5
subtract(10, 5, 1)  // 4
subtract('10', 5)  // 5
subtract(2, '3', 4)  // -5
subtract('5', '5')  // 10
subtract('aa', 3)  // NaN

// NOTE: I need think on implemet placeholder Symbol or like to solve this.
const subtract2 = curry(subtract, 2)
subtract2(100)  // -98
-subtract2(100)  // 98

const subtract2 = x => subtract(2, x)
```


### sum

Adds together all the elements of a list.

```javascript
sum([1])  // 1
sum([1, 1])  // 2
sum([1, 2, 4])  // 7
sum(['1', 2, 4])  // 7
sum(['1', '2', '4'])  // 7

const sum10 = list => sum([...list, 10])
sum10([1, 2, 4])  // 17
```


### truncate

Truncate too long strings and adds ellipsis to the end.

```javascript

```

---

## TODO

- Add tests.
