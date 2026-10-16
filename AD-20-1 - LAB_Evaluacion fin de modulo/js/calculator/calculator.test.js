const calculator = require('./calculator');

//add
test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('adds -4 + 8 to equal 4', () => {
  expect(calculator.add(-4, 8)).toBe(4);
});

//substract
test('subtract 5 - 4 to equal 1', () => {
  expect(calculator.subtract(5, 4)).toBe(1);
});

test('subtract -5 - -10 to equal 5', () => {
  expect(calculator.subtract(-5, -10)).toBe(5);
});

// ================== tarea 1 ======================
//divide
test('divide 20 / 5 to equal 4', () => {
  expect(calculator.divide(20, 5)).toBe(4);
});

test('divide 99 / 3 to equal 33', () => {
  expect(calculator.divide(99, 3)).toBe(33);
});

//multiply
test('multiply 3 * 12 to equal 36', () => {
  expect(calculator.multiply(3, 12)).toBe(36);
});

test('multiply 41 * 2 to equal 82', () => {
  expect(calculator.multiply(41, 2)).toBe(82);
});

// ================== Tarea 2 ==================
test("divide by zero returns 0", () => {
    expect(calculator.divide(18, 0)).toBe(0);
});