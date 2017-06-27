
import append from '../src/append'

describe('Any elements of the list are bigger than 10', () => {
  const source = ['Eve', 'Bob', 'Alice']
  const expected = ['Eve']

  test('adds an element to the end of the list', () => {
    expect(append(3, [1, 2])).toHaveLength(3)
  })

  test('sure adds an element to the end of the list', () => {
    expect(append('Eve', ['Bob', 'Alice'])).toEqual(expect.arrayContaining(source))
  })

  test('works on empty list', () => {
    expect(append(1, [])).toHaveLength(1)
  })

  test('sure works on empty list', () => {
    expect(append('Eve', [])).toEqual(expect.arrayContaining(expected))
  })

  test('adds an element to the end of the list', () => {
    expect(append(3, [1])).not.toHaveLength(3)
  })

})
