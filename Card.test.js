import * as Card from './Card';
import * as Animal from './Animal';

test('makeCard assigns animal', () => {
  const card = Card.makeCard(Animal.Shark, Card.GROUP_A);
  expect(card.animal).toBe(Animal.Shark);
});

test('makeCard assigns group', () => {
  const card = Card.makeCard(Animal.Shark, Card.GROUP_B);
  expect(card.group).toBe(Card.GROUP_B);
});

test('makePair makes one for each group', () => {
  const [first, second] = Card.makePair(Animal.Elephant);
  expect(first.group).toBe(Card.GROUP_A);
  expect(second.group).toBe(Card.GROUP_B);
});

test('key is unique', () => {
  const [first, second] = Card.makePair(Animal.Cow);
  expect(Card.key(first)).not.toBe(Card.key(second));
});

test('match only compares animals', () => {
  const [first, second] = Card.makePair(Animal.Cow);
  expect(Card.isMatch(first, second)).toBeTruthy();
});

test('isSameCard compares group and animal', () => {
  const [first, second] = Card.makePair(Animal.Cow);
  expect(Card.isSameCard(first, second)).toBeFalsy();
  expect(Card.isSameCard(first, first)).toBeTruthy();
});
