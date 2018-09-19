import * as Item from './Item';
import * as Tableau from './Tableau';
import * as Deck from './Deck';

describe('Item', () => {

  const setupItem = () => Tableau.initialize(Deck.makeDeck(), 4)[0];
  const setupPair = () => Tableau.initialize(Deck.makeDeck(), 1);

  test('it is initially face down', () => {
    const item = setupItem();
    expect(item.cardState).toBe(Item.FACE_DOWN);
  });

  test('items with the same animal match', () => {
    const [a, b] = setupPair();
    expect(Item.isMatch(a, b)).toBeTruthy();
  });

  test('cards with same animal have distinct identity', () => {
    const [a, b] = setupPair();
    expect(Item.isSame(a, b)).toBeFalsy();
  });
});