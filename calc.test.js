const calc = require('./calc');

test('should return null', () => {
  expect(calc(undefined, 1, 3, 3)).toBeNull();
});

test('should return null', () => {
  expect(calc(1, undefined, 3, 3)).toBeNull();
});

test('should return null', () => {
  expect(calc(1, 1, undefined, 3)).toBeNull();
});

test('should return null', () => {
  expect(calc(1, 1, 3, undefined)).toBeNull();
});

test('negative number should return null', () => {
  expect(calc(1, 1, 3, -3)).toBeNull();
});

test('should return array of objects', () => {
  expect(calc(0, 0, 3, 3)).toMatchObject([
    { x: 0, y: 0 },
    { x: 1, y: 1 },
    { x: 2, y: 2 },
    { x: 3, y: 3 },
  ]);
});

test('left up diagonal', () => {
  expect(calc(3, 3, 1, 1)).toMatchObject([
    { x: 3, y: 3 },
    { x: 2, y: 2 },
    { x: 1, y: 1 },
  ]);
});

test('left down diagonal', () => {
  expect(calc(1, 1, 3, 3)).toMatchObject([
    { x: 1, y: 1 },
    { x: 2, y: 2 },
    { x: 3, y: 3 },
  ]);
});

test('right up diagonal', () => {
  expect(calc(1, 3, 3, 1)).toMatchObject([
    { x: 1, y: 3 },
    { x: 2, y: 2 },
    { x: 3, y: 1 },
  ]);
});

test('right down diagonal', () => {
  expect(calc(3, 1, 1, 3)).toMatchObject([
    { x: 3, y: 1 },
    { x: 2, y: 2 },
    { x: 1, y: 3 },
  ]);
});
