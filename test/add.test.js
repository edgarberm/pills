
import add from '../src/add'

test('add 1 + 2 equals 3', () => {
  expect(add(1, 2)).toBe(3)
})


test('add "1" + 2 equals 3', () => {
  expect(add('1', 2)).toBe(3)
})

test('add "1" + "2" equals 3', () => {
  expect(add('1', "2")).toBe(3)
})
