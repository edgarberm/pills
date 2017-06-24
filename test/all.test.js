
import all from '../src/all'

const biggerThanTen = n => n > 10

test('all [0, 1, 2, 3] are smaller than 10', () => {
  expect(all(biggerThanTen, [0, 1, 2, 3])).toBe(false)
})

test('all [11, 12, 13, 14] are bigger than 10', () => {
  expect(all(biggerThanTen, [11, 12, 13, 14])).toBe(true)
})
