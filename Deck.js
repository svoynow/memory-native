import flatMap from 'lodash/fp/flatMap';
import flow from 'lodash/fp/flow';

import * as Animal from './Animal';
import * as Card from './Card';
import * as Helpers from './Helpers';

export const makeDeck = () => {
  return flow(
    Helpers.shuffleArray,
    flatMap(Card.makePair)
  )(Animal.all);
};


