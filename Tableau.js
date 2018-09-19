import * as Item from './Item';
import * as Helpers from './Helpers';
import take from 'lodash/fp/take';
import map from 'lodash/fp/map';
import flow from 'lodash/fp/flow';
import filter from 'lodash/fp/filter';
import head from 'lodash/fp/head';
import reduce from 'lodash/fp/reduce';

export const initialize = (deck, numPairs) => {  
  return flow(
    take(numPairs * 2),
    Helpers.shuffleArray,
    map(Item.initialize)
  )(deck);
};

export const getItemState = (tableau, item) => {
  return flow(
    filter(x => Item.isSame(item, x)),
    head,
    x => x.cardState
  )(tableau);
};

export const pairsFound = tableau => {  
  return filter(
    ({cardState}) => cardState == Item.PAIRED,
    tableau
  ).length / 2;
};

export const complete = tableau => pairsFound(tableau) * 2 == tableau.length;

export const changeItemState = (tableau, item, newState) => {
  return map(
    it => Item.isSame(item, it) ? {...item, cardState: newState} : it,
    tableau
  );
};

export const flipCard = (tableau, gameCard) =>
  changeItemState(tableau, gameCard, Item.FACE_UP);  

export const resetCards = (tableau, cards) =>
  changeItemsState(tableau, cards, resetCard);

export const pairCards = (tableau, cards) =>
  changeItemsState(tableau, cards, pairCard);

const changeItemsState = (tableau, items, fn) => 
  reduce((t, it) => fn(t, it), tableau, items);

const resetCard = (tableau, gameCard) =>
  changeItemState(tableau, gameCard, Item.FACE_DOWN);

const pairCard = (tableau, gameCard) =>
  changeItemState(tableau, gameCard, Item.PAIRED);  



