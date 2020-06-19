/**
 * 1. Получить число pi из Math и округлить его до 2-х знаков после точки
 */
let pi = parseFloat((Math.PI).toFixed(2))
console.log(pi)

/**
 * 2. Используя Math, найти максимальное и минимальное числа из представленного ряда 15, 11, 16, 12, 51, 12, 13, 51
 */
let minimum = Math.min(15, 11, 16, 12, 51, 12, 13, 51)
let maximum = Math.max(15, 11, 16, 12, 51, 12, 13, 51)
console.log('minimum', minimum)
console.log('maximum', maximum)

/**
 * 3. Работа с Math.random:
 * a. Получить случайное число и округлить его до двух цифр после запятой
 * b. Получить случайное целое число от 0 до X. X - любое произвольное число.
 */
let a = (Math.random() * 10).toFixed(2)

let num = 10
let b = Math.floor(Math.random() * num)
console.log(b)

/**
 * 4. Проверить результат вычисления 0.6 + 0.7 - как привести к нормальному виду (1.3)?
 */
//const exp = (0.6 * 10 + 0.7 * 10) / 10
const exp = parseFloat((0.6 + 0.7).toFixed(1))
console.log(exp)

/**
 * 5. Получить число из строки ‘100$’
 */
const input = '100$'
console.log(parseInt(input))