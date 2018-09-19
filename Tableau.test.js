import * as Tableau from './Tableau';
import * as Deck from './Deck';
import * as Item from './Item';
import take from 'lodash/fp/take';


const setupTableau = () => Tableau.initialize(Deck.makeDeck(), 8);

describe('initialize', () => {

  test('it returns the correct number of pairs', () => {    
    expect(setupTableau()).toHaveLength(16);
  });
});

describe('getItemState', () => {
  test('finds the item', () => {
    const tableau = setupTableau();
    expect(Tableau.getItemState(tableau, tableau[0])).toBe(tableau[0].cardState);
  });


  describe('pairsFound', () => {
    test('should be zero for a new tableau', () => {
      expect(Tableau.pairsFound(setupTableau())).toBe(0);
    });

    test('counts the number of pairs in the paired state', () => {
      let tableau = setupTableau();
      tableau = Tableau.pairCards(tableau, take(4, tableau));
      expect(Tableau.pairsFound(tableau)).toBe(2);
    });
  });

  describe('flipCard', () => {

    test('it changes a card from face up to face down', () => {
      let tableau = setupTableau();
      let [before, ..._rest] = tableau;
      let [after, ..._rest2] = Tableau.flipCard(tableau, before);
      expect(after.cardState).toBe(Item.FACE_UP);

    });

    test('it is idempotent', () => {
      let tableau = setupTableau();
      let [before, ..._rest] = tableau;
      let [afterOne, ..._rest2] = Tableau.flipCard(tableau, before);
      let [afterTwo, ..._rest3] = Tableau.flipCard(tableau, afterOne);
      expect(afterTwo.cardState).toBe(Item.FACE_UP);
    });
  });

  describe('resetCards', () => {
    test('sets a pair of cards back to face down', () => {
      let tableau = setupTableau();
      let [a, b, ..._rest] = tableau;
      tableau = Tableau.flipCard(tableau, a);
      tableau = Tableau.flipCard(tableau, b);
      let [flippedA, flippedB, ..._x] = tableau;
      let [resetA, resetB, ..._y] = Tableau.resetCards(tableau, [flippedA, flippedB]);
      expect([resetA.cardState, resetB.cardState]).toEqual([Item.FACE_DOWN, Item.FACE_DOWN]);
    });
  });
});