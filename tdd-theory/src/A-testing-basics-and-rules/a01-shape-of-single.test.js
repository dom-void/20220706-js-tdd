/**
 * UWAGA:
 * - test poniżej jest "niemądry" :), jest tutaj jednak po to, aby pokazać, jak prosto jest uzyskać automatyzację testu;
 * - normalnie, nie robimy tego typu: "testowania czy JavaScript działa".
 *
 * - Czasami zdarza się jednak jeden prosty test (tzw. sanity test),
 * tylko po to, aby upewnić się, że testowanie env działa.
 *
 *
 * Skoncentrujmy się nad tym, jak napisać dobry test dopiero w kolejnych przykładach.
 * */
// Rozwiązane jeszcze bez Test Driven podejścia.

function dvideNumbers(a, b) {
	if(b === 0) {
		throw new Error('You cannot divide by 0')
	}
	if(!a && !b) {
		return 0;	
	}
	return a / b;
}


test('divideNumbers should properly divide 2 numbers', () => {

	const result = dvideNumbers(200, 10);

	expect(result).toBe(20)
})

/*
test('divideNumbers should not divide by 0 - returning 0', () => {

	const result = dvideNumbers(200, 0);

	expect(result).toBe(0)
})
*/

test('divideNumbers should throw an Error when try to divide by 0', () => {
	
	expect(() => dvideNumbers(200, 0)).toThrowError('You cannot divide by 0');

	// throw new Error('Hello reporter !')

	// console.log('1')
})

test('divideNumbers should return 0 when no arguments given', () => {
	
	const result = dvideNumbers();

	expect(result).toBe(0)
})