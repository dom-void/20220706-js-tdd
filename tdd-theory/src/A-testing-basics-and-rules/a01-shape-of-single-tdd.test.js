
// TDD:

// Funkcja która dodaje n liczb.

// Krok #2 Piszę implementację
function sumAll(...numbers) {
    let sum = 0;
    for(const number of numbers) {
        sum += number; // sum = sum + number;
    }
    return sum;
}

// #1 Najpierw PISZE TESTY - wszystkie, które przyjdą mi do głowy
test('should add 1 + 2 + 3 + 4 when 4 arguments passed', () => {

    const result = sumAll(1, 2, 3, 4);

    expect(result).toBe(10);
})

test('should add 100 + 200 + 300 when 3 arguments passed', () => {

    const result = sumAll(100, 200, 300);

    expect(result).toBe(600);
})


test('should be 0 when no arguments given', () => {

    const result = sumAll();

    expect(result).toBe(0);
})


test('should be 2 when only one argument 2 given', () => {

    const result = sumAll(2);

    expect(result).toBe(2);
})