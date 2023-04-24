import { capitalize } from './capitalize';
import reverseString from './reverseString';
import calculator from './calculator';
import caesarCipher from './caesarCipher';
import analyzeArray from './analyzeArray';

test('word is capitalized', () => {
  expect(capitalize('hello')).toMatch(/^[A-Z]/);
  expect(capitalize('world')).toMatch(/^[A-Z]/);
});

test('reverse a word', () => {
  expect(reverseString('hello')).toMatch('olleh');
  expect(reverseString('world')).toMatch('dlrow');
});

test('add 1 to 2 by calculator obj', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('subtract 3 from 5 by calculator obj', () => {
  expect(calculator.subtract(5, 3)).toBe(2);
});

test('divide 3 by 2 by calculator obj', () => {
  expect(calculator.divide(3, 2)).toBeCloseTo(1.5);
});

test('multiply 5 by 3 with calculator obj', () => {
  expect(calculator.multiply(5, 3)).toBe(15);
});

test('cipher word correctly', () => {
  expect(caesarCipher('A?bc!', 1)).toMatch('B?cd!');
  expect(caesarCipher('zzz!', 2)).toMatch('bbb!');
  expect(caesarCipher('h,e,l,l,o.', 1)).toMatch('i,f,m,m,p.');
});

test('analyze array correctly', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
