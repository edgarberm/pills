
import add from '../src/add'

describe('Add method test', () => {

  it('add 1 + 2 equals 3', () => {
    expect(add(1, 2)).toBe(3)
    expect(add(1, 2)).not.toBe(6)
    expect(add(1, 2)).not.toBe(NaN)
  })

  it('add "1" + 2 equals 3', () => {
    expect(add('1', 2)).toBe(3)
    expect(add('1', 2)).not.toBe(6)
    expect(add('1', 2)).not.toBe(NaN)
  })

  it('add "1" + "2" equals 3', () => {
    expect(add('1', "2")).toBe(3)
    expect(add('1', "2")).not.toBe(6)
    expect(add('1', "2")).not.toBe(NaN)
  })
})
