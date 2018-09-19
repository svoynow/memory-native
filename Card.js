import * as Animal from './Animal';

export const GROUP_A = 'A';
export const GROUP_B = 'B';
export const GROUPS = [GROUP_A, GROUP_B];

export const makeCard = (animal, group) => {
  return {
    animal, 
    group,
  };
};

export const makePair = animal => {
  return [makeCard(animal, GROUP_A), makeCard(animal, GROUP_B)];
};

export const image = ({ animal }) => Animal.requireImage(animal);

export const key = ({ group, animal }) => `${group}${animal}`;

export const isMatch = ({ animal: a }, { animal: b }) => a === b;

export const isSameCard = ({ animal: a, group: x }, { animal: b, group: y }) =>
  a === b && x === y;
