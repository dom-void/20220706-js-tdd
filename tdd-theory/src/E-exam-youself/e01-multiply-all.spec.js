/**
 * #e01 Zadanie:
 * Na rozgrzewkę - zadanie jest łatwiejsze...
 *
 * - Napisałem dla ciebie pierwszy test.
 * - Reszta (implementacja i może więcej testów?) należy do Ciebie.
 *
 * Specyfikacja:
 * Napisz funkcję mnożącą wszystkie podane argumenty
 *
 * na przykład podany INPUT: 1 2 3 4 5
 *
 * wykona mnożenie: 1 * 2 * 3 * 4 * 5
 *
 * i zwróci, OUTPUT: 120
 *
 * i tak dalej...
 *
 * Przypadki brzegowe:
 * - nie podano argumentów - OUTPUT: 0
 * - podany argument złego typu np. string — zastosuj "ciche" pominięcie argumentu np.
 *    - INPUT: 1 2 '3'
 *    - OUTPUT: 2
 *
 *    - INPUT: 2 4 true
 *    - OUTPUT: 8
 *
 *    - INPUT: 3 'ok' '2' 2
 *    - OUTPUT: 6
 * */

const { multiplyAll } = require('./e01-multiply-all');

// Usuń .skip PRZED napisaniem testów

/*
* Robimy podejście TDD.
*
* 1st - napisz testy
* 2nd - zaimplementuj
* 3rd - refactor
* */

describe('multiplyAll', () => {

	it('should multiply N given arguments', () => {

		const result = multiplyAll(2, 3, 9)

		expect(result).toEqual(54)
	})

	it('should return 1 if no arguments given', () => {

		const result = multiplyAll()

		expect(result).toEqual(1)
	})

	it('should skip non numeric arguments if given', () => {

		const result = multiplyAll(1, '90', 2, [], 2)

		expect(result).toEqual(4)
	})

	it('should skip NaN argument from calculation', () => {

		const result = multiplyAll(2, 2, NaN, 2, 8)

		expect(result).toEqual(64)
	})

	it('should work with decimal numbers', () => {

		const result = multiplyAll(2, 0.5, 0.8, 0.3)

		expect(result).toEqual(0.24)
		// Ale można też tak:
		expect(result).toBeCloseTo(0.25, 1)
	})
})
