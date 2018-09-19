export const Badger = 'Badger';
export const Bee = 'Bee';
export const Bird = 'Bird';
export const Butterfly = 'Butterfly';
export const Cat = 'Cat';
export const Chicken = 'Chicken';
export const Cow = 'Cow';
export const Crab = 'Crab';
export const Deer = 'Deer';
export const Dinosaur = 'Dinosaur';
export const Dog = 'Dog';
export const Dolphin = 'Dolphin';
export const Elephant = 'Elephant';
export const Duck = 'Duck';
export const Frog = 'Frog';
export const Gorilla = 'Gorilla';
export const Horse = 'Horse';
export const Kangaroo = 'Kangaroo';
export const Leopard = 'Leopard';
export const Lion = 'Lion';
export const Llama = 'Llama';
export const Octopus = 'Octopus';
export const Rhinoceros = 'Rhinoceros';
export const Shark = 'Shark';
export const Sheep = 'Sheep';
export const Snail = 'Snail';
export const Turtle = 'Turtle';
export const Whale = 'Whale';
export const Wolf = 'Wolf';

export const all = [
  Badger,
  Bee,
  Bird,
  Butterfly,
  Cat,
  Chicken,
  Cow,
  Crab,
  Deer,
  Dinosaur,
  Dog,
  Dolphin,
  Elephant,
  Duck,
  Frog,
  Gorilla,
  Horse,
  Kangaroo,
  Leopard,
  Lion,
  Llama,
  Octopus,
  Rhinoceros,
  Shark,
  Sheep,
  Snail,
  Turtle,
  Whale,
  Wolf,
];

export const requireImage = (animal) => {
  let source = require('./images/Bee.png');
  switch (animal) {
  case Badger:
    source = require('./images/Badger.png');
    break;
  case Bee:
    source = require('./images/Bee.png');
    break;
  case Bird:
    source = require('./images/Bird.png');
    break;
  case Butterfly:
    source = require('./images/Butterfly.png');
    break;
  case Cat:
    source = require('./images/Cat.png');
    break;
  case Chicken:
    source = require('./images/Chicken.png');
    break;
  case Cow:
    source = require('./images/Cow.png');
    break;
  case Crab:
    source = require('./images/Crab.png');
    break;
  case Deer:
    source = require('./images/Deer.png');
    break;
  case Dinosaur:
    source = require('./images/Dinosaur.png');
    break;
  case Dog:
    source = require('./images/Dog.png');
    break;
  case Dolphin:
    source = require('./images/Dolphin.png');
    break;
  case Elephant:
    source = require('./images/Elephant.png');
    break;
  case Duck:
    source = require('./images/Duck.png');
    break;
  case Frog:
    source = require('./images/Frog.png');
    break;
  case Gorilla:
    source = require('./images/Gorilla.png');
    break;
  case Horse:
    source = require('./images/Horse.png');
    break;
  case Kangaroo:
    source = require('./images/Kangaroo.png');
    break;
  case Leopard:
    source = require('./images/Leopard.png');
    break;
  case Lion:
    source = require('./images/Lion.png');
    break;
  case Llama:
    source = require('./images/Llama.png');
    break;
  case Octopus:
    source = require('./images/Octopus.png');
    break;
  case Rhinoceros:
    source = require('./images/Rhinoceros.png');
    break;
  case Shark:
    source = require('./images/Shark.png');
    break;
  case Sheep:
    source = require('./images/Sheep.png');
    break;
  case Snail:
    source = require('./images/Snail.png');
    break;
  case Turtle:
    source = require('./images/Turtle.png');
    break;
  case Whale:
    source = require('./images/Whale.png');
    break;
  case Wolf:
    source = require('./images/Wolf.png');
    break;
  default:
    source = require('./images/Shark.png');
  }
  return source;
};
