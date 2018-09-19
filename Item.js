import * as Card from './Card';

export const FACE_UP = 'FaceUp';
export const FACE_DOWN = 'FaceDown';
export const PAIRED = 'Paired';

const faceDownImage = require('./images/blue.png');
const pairedImage = require('./images/x.png');

export const isMatch = ({card: a}, {card: b}) => Card.isMatch(a, b);
export const isSame = ({card: a}, {card: b}) => Card.isSameCard(a, b);

export const initialize = card => {
  return {
    card: card,
    cardState: FACE_DOWN
  };
};

export const image = ({cardState, card}) => {
  let src;
  let animal = Card.image(card);
  switch(cardState) {
  case FACE_UP:
    src = animal;
    break;
  case FACE_DOWN:
    src = faceDownImage;
    break;
  case PAIRED:
    src = pairedImage;
    break;
  default:
    src = animal;
  }
  return src;
};