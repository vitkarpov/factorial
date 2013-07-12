/*
 * 		функция-конструктор ищет все числа,
 * 		факториалы цифр которых в сумме дают это число,
 * 		в интервале от нуля до заданного числа.
 * 		Возвращает объект с результатами:
 *
 * 1. правая граница интервала поиска
 * 2. время работы в миллисекундах
 * 3. массив найденных чисел
 */
CheckBetweenZeroAnd = (function(global) {

	var 
		/* 
		 * дефолтное значение правой границы интервала поиска
		 * будет установлено, если явно не определить его
		 * при запуске программы
		 */
		defaultMax = 200;

	/*
	 * Возвращает факториал числа
	 *
	 * Использует статическую переменную функции
	 * для записи уже найденных значений факториала
	 *
	 * @name _factorial
	 * @param {Number} n
	 */	
	function _factorial(n) {
		if (!_factorial.cache) {
			_factorial.cache = {
				"0": 1,
				"1": 1,
				"2": 2
			}
		}
		if (!_factorial.cache.hasOwnProperty(n)) {
			_factorial.cache[n] = n*_factorial(n-1)
		}
		return _factorial.cache[n]
	}

	/*
	 * возвращает массив цифр числа
	 *
	 * @name _getDigits
	 * @param {Nubmer} num Число, цифры которого нужно достать
	 */
	function _getDigits(num) {
		var digits = [],
				_i = 0,
				strNum, _l;

		if (!num) {
			return digits;
		}

		strNum = '' + num;
		_l = strNum.length;

		for (; _i < _l; _i++) {
			digits.push( +strNum.charAt(_i) );
		}

		return digits;
	}

	/*
	 * Проверяет равна ли сумма факториалов чисел числу с цифрами равным этим числами
	 * Например, 145 = 1! + 4! + 5!
	 * Возвращает boolean
	 *
	 * @name _checkFactorialSum
	 * @param {Array} digits числа, для которых нужно проверить равенство
	 */
	function _checkFactorialSum(digits) {
		var _l = digits.length,
				sum = 0,
				num;

		while (_l--) {
			sum += _factorial(digits[_l]);
		}
		num = +digits.join('');
		
		return sum == num;
	}

	return function(max) {
		var startTime,
				result = [];

		//установим дефолтное значение правой границы интервала, если не указано явно
		if (!max) {
			max = defaultMax;
		}

		//запишем правую границу интервала, пока не затерли значение max
		this.maxEdge = max;

		startTime = Date.now();

		//пройдемся по всему интервалу чисел
		while (max--) {
			//проверим равенство для набора цифр каждого числа
			if (_checkFactorialSum( _getDigits(max) )){
				//если есть совпадение, то запишем в результат
				result.push(max);
			}
		}

		this.workTime = Date.now() - startTime;
		this.foundNumbers = result;
	}

}(window));

f1000 = new CheckBetweenZeroAnd(1000);
/*
 * {
 * 	maxEdge: 1000,
 *  workTime: 5
 *  foundNumbers: [0, 1, 2, 145]
 * }	
 */
console.log(f1000);

f100000 = new CheckBetweenZeroAnd(100000);
/*
 * {
 * 	maxEdge: 100000,
 *  workTime: 348
 *  foundNumbers: [0, 1, 2, 145, 40585]
 * }	
 */
console.log(f100000);

f1000000 = new CheckBetweenZeroAnd(1000000);
/*
 * {
 * 	maxEdge: 1000000,
 *  workTime: 3612
 *  foundNumbers: [0, 1, 2, 145, 40585]
 * }	
 */
console.log(f1000000);