import * as Deck from './Deck';
import * as Item from './Item';
import * as Tableau from './Tableau';

// state names
export const NOT_STARTED = 'NOT_STARTED';
export const ONE_CARD_FLIPPED = 'ONE_CARD_FLIPPED';
export const TWO_CARDS_FLIPPED = 'TWO_CARDS_FLIPPED';
export const GAME_COMPLETE = 'GAME_COMPLETE';

// states
const NotStarted = {
  name: NOT_STARTED
};

const OneCardFlipped = (item) => {
  return {
    name: ONE_CARD_FLIPPED,
    item
  };
};

const TwoCardsFlipped = (a, b) => {
  return {
    name: TWO_CARDS_FLIPPED,
    items: [a, b]
  };
};

const GameComplete = {
  name: GAME_COMPLETE
};

// action names
const SELECT_ITEM = 'SELECT_ITEM';
const CONTINUE = 'CONTINUE';
const RESET = 'RESET';

// actions
export const SelectItem = (item) => {
  return {
    name: SELECT_ITEM,
    item
  };
};

export const Continue = {
  name: CONTINUE
};

export const Reset = {
  name: RESET
};

export const initialize = () => {
  const deck = Deck.makeDeck();
  return {
    tableau: Tableau.initialize(deck, 8),
    turnState: NotStarted
  };
};

export const hasMatch = (state) => {
  let result = false;
  let a, b;
  switch(state.name) {
  case TWO_CARDS_FLIPPED:
    [a, b] = state.items;
    result = Item.isMatch(a, b);
    break;
  default:
    result = false;
  }
  return result;
};

const firstSelection = [NOT_STARTED, SELECT_ITEM].join();
const secondSelection = [ONE_CARD_FLIPPED, SELECT_ITEM].join();
const continueAfterSecondSelection = [TWO_CARDS_FLIPPED, CONTINUE].join();

export const doAction = (action, {turnState, tableau}) => {
  let newState, newTableau;
  const situation = [turnState.name, action.name].join();
  switch(situation) {
  case firstSelection:
    if (Tableau.getItemState(tableau, action.item) == Item.FACE_DOWN) {
      newState = {
        tableau: Tableau.flipCard(tableau, action.item),
        turnState: OneCardFlipped(action.item)
      };
    }
    break;
  case secondSelection:
    if (Tableau.getItemState(tableau, action.item) == Item.FACE_DOWN) {
      newState = {
        tableau: Tableau.flipCard(tableau, action.item),
        turnState: TwoCardsFlipped(turnState.item, action.item)        
      };
    }
    break;
  case continueAfterSecondSelection:
    newTableau = Tableau.pairCards(tableau, turnState.items);
    newState = hasMatch(turnState) ? 
      {
        tableau: newTableau,
        turnState: Tableau.complete(newTableau) ? GameComplete : NotStarted
      } : 
      {
        tableau: Tableau.resetCards(tableau, turnState.items),
        turnState: NotStarted
      };
    break;
  default:
    newState = (action.name === RESET) ? initialize() : { tableau, turnState};
  }
  return newState;
};