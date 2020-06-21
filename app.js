/**
 *  Все поля добавлять по очереди, не создавать сразу готовый объект со всеми полями.

    Вопросы к этому заданию
    Создать объект с полем product, равным ‘iphone’

    Добавить в объект поле price, равное 1000 и поле currency, равное ‘dollar’

    Добавить поле details, которое будет содержать объект с полями model и color
 */

const object = {}

object.product = 'iphone'
object.price = 1000
object.currency = 'dollar'
object.details = {
    model: 's5',
    color: 'red'
}

console.log(object)