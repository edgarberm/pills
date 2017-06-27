
/**
 * Calculate the percentage (%) of a value. The firs parameter is the value and the
 * second parameter is the percentage to calculate.
 *
 * @param {Number} value Value on which the percentage is calculated.
 * @param {Number} percent The percentage to be applied.
 * @return {Number}
 * @example
 *
 *  percent(100, 50)  // 50
 *  percent(30, 20)  // 6
 *  percent(9.99, 10) // 0.9990000000000001
 *
 *  const percent50 = value => percent(value, 50)
 *  percent50(100)  // 50
 */

const percent = (value, percent) => Number(value) * Number(percent) / 100

export default percent
