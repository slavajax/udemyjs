/**
 * 1. Чему равно а, почему?
 */

//let a = 0 || 'string'; // string


//let a = 1 && 'string'; // string

//let a = null || 25; // 25


//let a = null && 25; // null


//let a = null || 0 || 35; // 35

// let a = null && 0 && 35; // null

/**
 * 2. Что отобразится в консоли. Почему?
 */

console.group('Что отобразится в консоли. Почему?')

console.log(12 + 14 + '12') // 2612

console.log(3 + 2 - '1') // 4

console.log('3' + 2 - 1) // 31

console.log(true + 2) // 3

console.log(+'10' + 1) // 11

console.log(undefined + 2) // NaN

console.log(null + 5) // 5

console.log(true + undefined) // NaN

console.groupEnd()


/**
 * 3. Создать произвольную переменную, присвоеть ей значение и написать условие, если переменная равна “hidden”,
 * присвоить ей значение “visible”, иначе - “hidden”.
 */

let variable = 'hidden'

if (variable == 'hidden') {
    variable = 'visible'
} else {
    variable = 'hidden'
}

console.log(variable)


/**
 * 4. Создать переменную и присвойте ей число.
        Используя if, записать условие:
         - если переменная равна нулю, присвоить ей 1;
         - если меньше нуля - строку “less then zero”;
         - если больше нуля - используя оператор “присвоение”, переменную умножить на 10 (использовать краткую запись).
 */

let number = 1

if (number == 0) {
    number++
} else if (number < 0) {
    number = 'less then zero'
} else if (number > 0) {
    number *= 10
}

console.log(number)


/**
 * 5. Дан объект let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false }.
 * Написать условие если возраст машины больше 5 лет то нужно вывести в консоль сообщение 'Need Repair'
 * и свойство needRepair в объекте car изменить на true;
 * иначе изменить на false.
 */

let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false }

if (car.age > 5) {
    console.log('Need Repair')
    car.needRepair = true
} else {
    car.needRepair = false
}

console.log(car)


/**
 * 6. Дан объект let item = { name: 'Intel core i7', price: '100$', discount: '15%' }.
   Написать условие если у item есть поле discount и там есть значение которое не NaN а также есть поле price значение
   которого также не NaN то в объекте item создать поле priceWithDiscount и записать туда цену с учетом скидки и вывести
   ее в консоль, обратите внимание что поля discount и price это строки и вам из них нужно получить числа чтобы выполнить
   расчет. иначе если поля discount нет то вывести просто поле price в консоль.
 */

console.clear()

let item = { name: 'Intel core i7', price: '100$', discount: '15%' }

if ((item.hasOwnProperty('discount') && !isNaN(parseInt(item.discount)))
    && (item.hasOwnProperty('price') && !isNaN(parseInt(item.price)))
) {
    item.priceWithDiscount = `${(parseInt(item.price) - (parseInt(item.price) * (parseInt(item.discount) / 100))).toString()}$`
    console.log(item.priceWithDiscount)
} else {
    console.log(item.price)
}

/**
7. Дан следующий код:
    let product = {
        name: “Яблоко”,
        price: “10$”
};

let min = 10; // минимальная цена
let max = 20; // максимальная цена

Написать условие если цена товара больше или равна минимальной цене и меньше или равна максимальной цене то вывести в
консоль название этого товара, иначе вывести в консоль что товаров не найдено.
*/

console.clear()

let product = {
    name: 'Яблоко',
    price: '10$'
};

let min = 9; // минимальная цена
let max = 20; // максимальная цена
let productPrice = parseInt(product.price)

if (productPrice >= min && productPrice <= max) {
    console.log(product.name)
} else {
    console.log('товаров не найдено')
}