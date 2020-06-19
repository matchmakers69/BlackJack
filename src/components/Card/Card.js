import React from 'react';
import PropTypes from 'prop-types';
import { CardContainer } from './CardStyles';

const Card = ({ card: { suit, face, reversed } }) => {
  if (reversed) {
    return <Card card={{}} />;
  }
  return (
    <CardContainer>
      <div className='card-inner'>
        <div className='card-name face'>
          <span>{face}</span>
        </div>
        <div className='card-name suit'>
          <span>{suit}</span>
        </div>
      </div>
    </CardContainer>
  );
};

Card.propTypes = {
  card: PropTypes.shape({
    suit: PropTypes.string,
  }),
};

Card.defaultProps = {
  suit: 'Spades',
  face: '4',
};

export default Card;
