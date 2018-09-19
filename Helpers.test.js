import * as Helpers from './Helpers';

test('shuffleArray', () => {
  const arr = [1,2,3,4];
  expect(Helpers.shuffleArray(arr)).toHaveLength(arr.length);
});