
import any from '../src/any'

const biggerThan10 = n => n > 10

test('any [0, 1, 2, 3] are smaller than 10', () => {
  expect(any(biggerThan10, [0, 1, 2, 3])).toBe(false)
})

test('any [11, 2, 3, 14] are bigger than 10', () => {
  expect(any(biggerThan10, [11, 2, 3, 14])).toBe(true)
})
