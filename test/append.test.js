
import append from '../src/append'

test('append: adds an element to the end of the list', () => {
  expect(append('code', ['read', 'write'])).toHaveLength(3)
})

test('append: works on empty list', () => {
  expect(append('code', [])).toHaveLength(1)
})
