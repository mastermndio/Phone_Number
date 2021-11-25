const phone_number = require('./phone_number');

test('Too many digits', () => {
  expect(phone_number("920381929391")).toBe(false);
});

test('Not enough digits', () => {
  expect(phone_number("10391848")).toBe(false);
});

test('Valid phone number', () => {
  expect(phone_number("2813308004")).toBe(true);
});
