import PropTypes from 'prop-types'; // ES6

export const cardShape = PropTypes.shape({
  animal: PropTypes.string,
  group: PropTypes.string
});

export const itemShape = PropTypes.shape({
  card: cardShape,
  cardState: PropTypes.string
});