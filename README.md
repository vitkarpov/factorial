# Факториал

Один из вопросов [анкеты для поступающих в ШРИ 2013](http://company.yandex.ru/job/vacancies/shri_2013.xml)

Напишите на JavaScript функцию, которая выводит список всех чисел, которые равны сумме факториалов своих цифр. Пример такого числа:

  4! + 0! + 5! + 8! + 5! = 40585

## Результаты

```javascript
f1000 = new checkBetweenZeroAnd(1000);
/*
 * {
 * 	maxEdge: 1000,
 *  workTime: 5
 *  foundNumbers: [0, 1, 2, 145]
 * }	
 */
console.log(f1000);

f100000 = new checkBetweenZeroAnd(100000);
/*
 * {
 * 	maxEdge: 100000,
 *  workTime: 348
 *  foundNumbers: [0, 1, 2, 145, 40585]
 * }	
 */
console.log(f100000);

f1000000 = new checkBetweenZeroAnd(1000000);
/*
 * {
 * 	maxEdge: 1000000,
 *  workTime: 3612
 *  foundNumbers: [0, 1, 2, 145, 40585]
 * }	
 */
console.log(f1000000);
 ```