import { Greeter } from '../index';

test('My Greeter', () => {
  expect(Greeter('George')).toBe('Hello George Haberis!');
});