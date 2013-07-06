(function(global) {

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
	 * @name factorial
	 * @param {Number} n
	 */	
	function factorial(n) {
		if (!factorial.cache) {
			factorial.cache = {
				"0": 1,
				"1": 1,
				"2": 2
			}
		}
		if (!factorial.cache.hasOwnProperty(n)) {
			factorial.cache[n] = n*factorial(n-1)
		}
		return factorial.cache[n]
	}

	/*
	 * возвращает массив цифр числа
	 *
	 * @name getDigits
	 * @param {Nubmer} num Число, цифры которого нужно достать
	 */
	function getDigits(num) {
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
	 * @name checkFactorialSum
	 * @param {Array} digits числа, для которых нужно проверить равенство
	 */
	function checkFactorialSum(digits) {
		var _l = digits.length,
				sum = 0,
				num;

		while (_l--) {
			sum += factorial(digits[_l]);
		}
		num = +digits.join('');
		
		return sum == num;
	}

	//приложение в глобальном пространстве имен
	global.app = {
		/*
		 * объект для результатов работы
		 */
		results: {},
		/*
		 * Запускает приложение в работу
		 * @name run
		 * @param {Number} max Правая граница интервала поиска
		 */
		run: function(max){
			var startTime, result = [];

			//установим дефолтное значение правой границы интервала, если не указано явно
			if (!max) {
				max = defaultMax;
			}

			//запишем max в результаты, пока не затерли
			this.results.maxEdge = max

			//запишем время перед началом вычислений
			startTime = Date.now()

			//пройдемся по всему интервалу чисел
			while (max--) {
				//проверим равенство для набора цифр каждого числа
				if (checkFactorialSum( getDigits(max) )){
					//если есть совпадение, то запишем в результат
					result.push(max);
				}
			}

			/*
			 *    результаты работы программы:
			 * 1. правая граница интервала поиска
			 * 2. время работы в миллисекундах
			 * 3. массив найденных чисел
			 */
			this.results.workTime = Date.now() - startTime,
			this.results.foundNumbers = result
		}
	}
}(window));

app.run(1000);

/*
 * app.results = {
 * 	maxEdge: 1000,
 *  workTime: ~5
 *  foundNumbers: [0, 1, 2, 145]
 * }	
 */
console.log(app.results);

app.run(100000);

/*
 * app.results = {
 * 	maxEdge: 100000,
 *  workTime: ~348
 *  foundNumbers: [0, 1, 2, 145, 40585]
 * }	
 */
console.log(app.results);

app.run(1000000);

/*
 * app.results = {
 * 	maxEdge: 1000000,
 *  workTime: ~3612
 *  foundNumbers: [0, 1, 2, 145, 40585]
 * }	
 */
console.log(app.results);

app.run(10000000);

/*
 * app.results = {
 * 	maxEdge: 10000000,
 *  workTime: ~39545
 *  foundNumbers: [0, 1, 2, 145, 40585]
 * }	
 */
console.log(app.results);