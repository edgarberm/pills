# 💊 Pills
## A collection of fun JavaScript functions (ES6) 😎🎉🎈

Implementation of the most useful and fun JavaScript functions (ES6).

This repo do not pretend to be another functional  programming (FP) library as Lodash, Underscore or Ramda.
These libraries work very fine and are well tested. They also have a very strong community behind them working
for a long time. I recommend that you use them!


## Index

- [Add](#add)
- [all](#all)
- [always](#always)
- [and](#and)
- [any](#any)
- [append](#append)
- [arity](#arity)
- [assoc](#assoc)
- [assocPath](#assocpath)
- [camelCase](#camelcase)
- [capitalize](#capitalize)
- [chunk](#chunk)
- [clean](#clean)
- [compose](#compose)
- [concat](#concat)
- [contains](#contains)
- [curry](#curry)
- [debounce](#debounce)
- [defer](#defer)
- [delay](#delay)
- [divide](#divide)
- [falsy](#falsy)
- [filterObject](#filterobject)
- [has](#has)
- [hasIn](#hasin)
- [isArray](#isarray)
- [isEven](#iseven)
- isEmpty
- [isFunction](#isfunction)
- [isInteger](#isinteger)
- [isNil](#isnil)
- [isNumber](#isnumber)
- [isObject](#isobject)
- isRegExp
- [isString](#isstring)
- [mapObject](#mapobject)
- [match](#match)
- [max](#max)
- [mean](#mean)
- [median](#median)
- [merge](#merge)
- [min](#min)
- [modulo](#modulo)
- [multiply](#multiply)
- [negate](#negate)
- [none](#none)
- [nth](#nth)
- [or](#or)
- [pairs](#pairs)
- [path](#path)
- pathOr
- [percent](#percent)
- [pick](#pick)
- [pipe](#pipe)
- [pluck](#pluck)
- [prop](#prop)
- [propOr](#propor)
- [reject](#reject)
- [remove](#remove)
- [repeat](#repeat)
- [replace](#replace)
- [reverse](#reverse)
- [sort](#sort)
- [sortBy](#sortby)
- [square](#square)
- [subtract](#subtract)
- [sum](#sum)
- [times](#times)
- [truncate](#truncate)
- [uniq](#uniq)
- [uniqBy](#uniqby)


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


### always

Returns a function that always returns the given value.

Ramda docs says:
Note that for non-primitives the value returned is a reference to the original value.
This function is known as `const`, `constant`, or `K` (for K combinator) in
other languages and libraries.

```javascript
const t = always('lol')
t()  // "lol"
```


### and

Returns `true` if both arguments are `true`; `false` otherwise.

```javascript
and(true, true)  // true
and(true, false)  // false
and(false, false)  // false
and(false, false)  // false
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


### arity

Returns the number of arguments accepted by the given function `fn`.

```javascript
const foo = (a, b, c) => a + b + c
const bar = (a, {}) => { a: a }
arity(foo)  // 3
arity(bar)  // 2
```


### assoc

Returns a copy of an object, setting or overriding the specified
property with the given value.

Note that this copies and flattens prototype properties onto the new object as
well. All non-primitive properties are copied by reference.

```javascript
assoc('c', 3, { a: 1, b: 2 })  // { a: 1, b: 2, c: 3 }
assoc('b', 23, { a: 1, b: 2 })  // { a: 1, b: 23 }
assoc('unit_price', '€', product)  // { "brand": "Brand goes here!", ..., "unit_price": "€", "width": 965 }
```


### assocPath

Returns a clone of an object, setting or overriding the nodes required
to create the given path, and placing the specific value at the tail end of
that path.

Note that this copies and flattens prototype properties onto the new object as well.
All non-primitive properties are copied by reference.

```javascript
const ob = { a: { b: { c: 0 } } }
const updated = assocPath(['a', 'b', 'c'], 1, ob)
console.log(updated)  // { a: { b: { c: 1 } } }
assocPath(['a', 'b', 'c'], 1, ob)  // { a: { b: { c: 1 } } }
assocPath(['a', 'b'], 1, { a: 5 })  // { a: { b: { c: 1 } } }
```


### camelCase

Converts `string` to camel case style.
See [camel case](https://en.wikipedia.org/wiki/CamelCase).

```javascript
let baz = 'foo bar'
let camel = camelCase(baz)
console.log(camel)  // "fooBar"
camelCase('foo bar')  // "fooBar"
camelCase('FOO BAR')  // "fooBar"
camelCase('x nN foo bar')  // "xNnFooBar"
camelCase('!--foo-¿?-bar--121-**%')  // "fooBar121"
```


### capitalize

Converts the String parameter to lowercase and his first char to uppercase.

```javascript
capitalize('lorem ipsum dolor sit amet')  // "Lorem ipsum dolor sit amet"
capitalize('LOREM IPSUM DOLOR SIT AMET')  // "Lorem ipsum dolor sit amet"
```


### chunk

Creates an `array` of elements split into groups the length of `size`.
If `array` can't be split evenly, the final chunk will be the remaining
elements.

```javascript
chunk(1, ['a', 'b', 'c', 'd'])  // [["a"], ["b"], ["c"], ["d"]]
chunk(2, ['a', 'b', 'c', 'd'])  // [["a" ,"b"], ["c", "d"]]
chunk(3, ['a', 'b', 'c', 'd'])  // [["a", "b", "c"], ["d"]]
```


### clean

Creates an array with all `falsy` values removed.
See [falsy](#falsy).

```javascript
const arr = [0, 1, false, null, undefined, 2, '', 3, '4', NaN]
const cln = clean(arr)  // [1, 2, 3, "4"]
```


### compose

Returns a function that is the composition of a list of functions, each
consuming the return value of the function that follows.

Note that this is exactly the same as [pipe](#pipe) but with the functions in
opposite order.

```javascript
const classyGreeting = (firstName, lastName) => "THE NAME'S " + lastName + ", " + firstName + " " + lastName
const yellGreeting = compose(camelCase, classyGreeting)
yellGreeting('JAMES', 'BOND')  // "theNameSBondJamesBond"
```


### concat

Returns the result of concatenating the given lists or strings.

```javascript
concat('ABC', 'DEF')  // "ABCDEF"
concat([1, 2, 3], [4, 5, 6])  // [1, 2, 3, 4, 5, 6]
concat('', '')  // ""
concat([], [])  // []
concat({}, '123')  // TypeError: [object Object] does not have a method named "concat"
```


### contains

Returns `true` if the specified value is equal to at least one element of the
given list, `false` otherwise.

```javascript
contains(3, [1, 2, 3])  // true
contains(4, [1, 2, 3])  // false
contains(4, [1, 2, 3, 4])  // true
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


### debounce

Limits the rate at which a function can fire.

```javascript
const debouncedResize = debounce((event) => {
  console.log('resized')
}, 1000)

window.addEventListener('resize', debouncedResize)
window.addEventListener('resize', debounce(debouncedResize, 1000))
```


### defer

Defer a function, scheduling it to run after the current call stack hascleared.

```javascript
defer(text => console.log(text), 'Deferred')
```


### delay

Invokes `fn` after `wait` milliseconds. Any additional arguments are
provided to `fn` when it's invoked.

```javascript
delay(text => console.log(text), 1000, 'Text to log after 1000ms')
delay(text => console.log(text), 3000, 'Text to log after 3000ms')
```


### divide

Divide two numbers.

```javascript
divide(10, 2)  // 5
divide(100, 2)  // 50
divide(1000, 2)  // 500
divide(6, 4)  // 1.5
```


### falsy

Returns if a value is falsy or not.

Falsy values:
- false
- 0 (zero)
- "" (empty string)
- null
- undefined
- NaN (a special Number value meaning Not-a-Number!)

```javascript
falsy(false)  // true
falsy(0)  // true
falsy('')  // true
falsy(null)  // true
falsy(undefined)  // true
falsy(NaN)  // true
falsy(1)  // false
```


### filterObject

Iterates over properties of an object `obj` returning an array of all
elements `fn` (predicate) returns truthy for.

Note that the predicate is invoked with three arguments: `value`, `key`, `object`.

```javascript
const object = { 'a': 5, 'b': 8, 'c': 10 }
filterObject((n) => !(n % 5), object)  // [5, 10]
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


### isEven

Check if a number is a multiple of 2.

```javascript
isEven(1)  // false
isEven(2)  // true
isEven(120)  // true
isEven(113)  // false
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


### isNil

Checks if `value` is `null` or `undefined`.

```javascript
isNil(null)  // true
isNil(undefined)  // true
isNil(NaN)  // false
isNil(0)  // false
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


### mapObject

Returns the results of applying the `fn` to each element of the `object`.
In contrast to `Array.map` it returns an `object`.

```javascript
const prependKeyAndDouble = (num, key, obj) => key + (num * 2)
const values = { x: 1, y: 2, z: 3 }
mapObject(prependKeyAndDouble, values)  // { x: 'x2', y: 'y4', z: 'z6' }
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

Creates a function that negates the result of the predicate `func`.

```javascript
const list = [1, 2, 3, 4, 5, 6]
list.filter(negate(isEven))  // [1, 3, 5]
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


### not

Returns the `!` of its argument. It will return `true` when passed falsy
value and `false` when passed a truly one.

```javascript
not(true)  // false
not(false)  // true
not(0)  // true
not(1)  // false
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


### or

Returns `true` if one or both of its arguments are `true`. Returns `false`
if both arguments are `false`.

```javascript
or(true, true)  // true
or(true, false)  // true
or(false, false)  // true
or(false, false)  // false
```


### pairs

Convert an object into a list of `[key, value]` pairs.

```javascript
const values = { x: 1, y: 2, z: 3 }
pairs(values)  // [["x", 1], ["y", 2], ["z", 3]
```


### path

Retrieve the value at a given path.

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
    "b": 2000,
    "under": {
      "a": 10000000,
      "b": 20000000,
      "superunder": {
        "a": 100000000000000,
        "b": 200000000000000
      }
    }
  }
}

path(['a', 'b'], { a: { b: 2 } })  // 2
path(['sub', 'under', 'superunder', 'b'], product)  // 200000000000000
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


### pick

Reads an array with multiple properties from an object and returns a partial
copy of an object with just those properties specified. If the key does not
exist, the property is ignored.

```javascript
pick(['a', 'd'], { a: 1, b: 2, c: 3, d: 4 })  // { a: 1, d: 4 }
pick(['a', 'e', 'f'], { a: 1, b: 2, c: 3, d: 4 })  // { a: 1 }
pick(['user'], { user: 'Bob', id: 2, age: 36 })  // { user: "Bob" }
```


### pipe

Performs `left-to-right` function composition. Takes a list of one or more
functions and returns a new function.

The new function takes the same number of arguments as the first function
it is given. It then, pipes those arguments through each function in the
list. It applies the first function to the arguments, passes its result to
the second function and so on.

The result of the last function is the result of the pipe call.

Note that this is exactly the same as [compose](#compose) but with the functions in
opposite order.

```javascript
const inc = n => n + 1
const dbl = n => n * 2
const sqr = n => n * n
const operate = pipe(inc, dbl, sqr)
operate(2)  // 36
operate(5)  // 144
operate(1)  // 16

// NOTE: same example but with `compose` produces different value.
const operateCompose = compose(inc, dbl, sqr)
operateCompose(1)  // 3
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


### propOr

If the given object has an own property with the specified name, returns the
value of that property. Otherwise returns the provided default value.

```javascript
propOr('The default property value.', 'unit_price', product)  // "The default property value."
propOr('The default property value.', 'price', product)  // 9.99
```


### reject

The opposite of `filter` this method returns the elements of `list` that `fn`
does **not** return truthy for.

```javascript
const obj = { 'a': 1, 'b': 2, 'c': 3, 'd': 4 }
const arr = [1, 2, 3, 4]
reject(obj, isEven)  // [1, 3]
reject(arr, isEven)  // [1, 3]

const users = [
  { 'user': 'barney', 'active': true },
  { 'user': 'fred',   'active': false }
]
reject(users, ({ active }) => active)  // [{ 'user': 'fred',   'active': false }]
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


### repeat

Returns a fixed list of size `n` containing a specified identical value.

```javascript
const obj = {}
const repObjs = n => repeat(obj, n)
repObjs(3)  // [{}, {}, {}]
repeat('str', 6)  // ['str', 'str', 'str', 'str', 'str', 'str']
```


### replace

Replace a substring or regex match in a string with a replacement.

```javascript
replace('foo', 'bar', 'foo foo foo')  // "bar foo foo"
replace(/foo/, 'bar', 'foo foo foo')  // "bar foo foo"
replace(/foo/g, 'bar', 'foo foo foo')  // "bar bar bar"
```


### reverse

Returns a new list or string with the elements or characters in reverse
order.

```javascript
reverse([1, 2, 3, 4])  // [4, 3, 2, 1]
reverse('abcde')  // "edcba"
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


### square

Multiply a number `n` by itself.

```javascript
square(2)  // 4
square(8)  // 64
square(16)  // 256
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


### times

Returns an Array containing the results of call an input function `n` times.
Note that `fn` is passed one argument: the current value of `n`.

```javascript
const family = [
  { 'name': 'pilar', 'age': 20 },
  { 'name': 'alberto', 'age': 3 },
  { 'name': 'edgar', 'age': 30 }
  ]

const foo = n => family[n].name
const baz = n => n
times(foo, family.length)  // ['pilar', 'alberto', 'edgar']
times(baz, 100))  // [0, 1, 2, ..., 99]
```


### truncate

Truncate a long strings to max num of characters and add ellipsis to the end.

```javascript
truncate('Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 12)  // "Lorem ipsum..."
truncate('Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 12, ' 🙌🏻')  // "Lorem ipsum 🙌🏻"
```


### uniq

Returns a new list containing only one copy of each element in the original list.

```javascript
uniq([1, 2, 1, 4, 1, 3])  // [1, 2, 4, 3]
uniq(['a', 'b', 'c', 'a', 'd'])  // ["a", "b", "c", "d"]
```


### uniqBy

Returns a new list containing one copy of each unique element in the original
list filtered by `prop` parameter.

Note that if the supplied function produces the same value on two items, prefers
the first item.

```javascript
const people = [
   { 'id': 1, 'name': 'edgar' },
   { 'id': 1, 'name': 'pilar' },
   { 'id': 1, 'name': 'pilar' },
   { 'id': 2, 'name': 'ivan' },
   { 'id': 2, 'name': 'inma' }
 ]
*
 uniqBy('id', people)  // [{ 'id': 1, 'name': 'edgar' }, { 'id': 2, 'name': 'ivan'}]
 uniqBy('name', people)  // [{ 'id': 1, 'name': 'edgar' }, { 'id': 1, 'name': 'pilar' }, { 'id': 2, 'name': 'ivan'}, { 'id': 2, 'name': 'inma'}]
 uniqBy((o) => o.id, people)  // [{ 'id': 1, 'name': 'edgar' }, { 'id': 2, 'name': 'ivan'}]
```

---

## TODO

- Add tests.
