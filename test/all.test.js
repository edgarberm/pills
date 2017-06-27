
import all from '../src/all'

describe('All elements of the list are bigger than 10', () => {
  const expected = [11, 12, 13, 14]
  const biggerThan10 = n => n > 10

  test('all received elements are biggest than 10', () => {
    expect(all(biggerThan10, expected)).toBe(true)
  })

  test('all received elements are not biggest than 10', () => {
    expect(all(biggerThan10, [0, 1, 2, 3])).toBe(false)
  })
})



describe('All elements of the list are smaller than 10', () => {
  const expected = [0, 1, 2, 3]
  const smallerThan10 = n => n < 10

  test('all received elements are smaller than 10', () => {
    expect(all(smallerThan10, expected)).toBe(true)
  })

  test('all received elements are not smaller than 10', () => {
    expect(all(smallerThan10, [11, 12, 13, 14])).toBe(false)
  })
})
