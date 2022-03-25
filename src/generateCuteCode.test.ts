const { generateCuteCode } = require('./index');

test('Checking type of code', () => {
  expect((typeof generateCuteCode() === 'string')).toBeTruthy();
});

test('Checking length of code', () => {
  expect(generateCuteCode().length === 4).toBeTruthy();
});