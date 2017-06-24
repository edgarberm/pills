
import all from '../src/all'

const biggerThan10 = n => n > 10

test('all [0, 1, 2, 3] are smaller than 10', () => {
  expect(all(biggerThan10, [0, 1, 2, 3])).toBe(false)
})

test('all [11, 12, 13, 14] are bigger than 10', () => {
  expect(all(biggerThan10, [11, 12, 13, 14])).toBe(true)
})
