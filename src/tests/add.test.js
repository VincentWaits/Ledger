const add = (a, b) => a + b;

const generateGreeting = (name) => `Hello ${name}!`;
// First argument is always a description of what this
// tested function should do
test('should add two numbers', () => {
  const result = add(3, 4);
  expect(result).toBe(7);
});

test('Should send greating', () => {
  expect(generateGreeting('Vincent')).toBe('Hello Vincent!');
});
