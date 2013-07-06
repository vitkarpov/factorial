# Факториал

Один из вопросов [анкеты для поступающих в ШРИ 2013](http://company.yandex.ru/job/vacancies/shri_2013.xml)

Напишите на JavaScript функцию, которая выводит список всех чисел, которые равны сумме факториалов своих цифр. Пример такого числа:

  4! + 0! + 5! + 8! + 5! = 40585

## Результаты

```javascript
app.run(1000);
/*
 * app.results = {
 * 	maxEdge: 1000,
 *  workTime: 5
 *  foundNumbers: [0, 1, 2, 145]
 * }	
 */

app.run(100000);
/*
 * app.results = {
 * 	maxEdge: 100000,
 *  workTime: 348
 *  foundNumbers: [0, 1, 2, 145, 40585]
 * }	
 */

app.run(1000000);
/*
 * app.results = {
 * 	maxEdge: 1000000,
 *  workTime: 3612
 *  foundNumbers: [0, 1, 2, 145, 40585]
 * }	
 */

app.run(10000000);
/*
 * app.results = {
 * 	maxEdge: 10000000,
 *  workTime: 39545
 *  foundNumbers: [0, 1, 2, 145, 40585]
 * }	
 */
 ```