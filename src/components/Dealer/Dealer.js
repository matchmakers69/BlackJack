import React, { useContext } from 'react';
import { Col } from 'react-styled-flexboxgrid';
import GameContext from '../../GameContext';
import Card from '../Card';
import { Points } from './DealerStyles';
const Dealer = () => {
  const { dealerCards, getScoreByPlayer } = useContext(GameContext);

  const dealerScore = getScoreByPlayer(dealerCards);

  return (
    <Col xs={6}>
      <h2>Dealer</h2>
      <h3>Dealer's points</h3>
      <Points>
        <span>{dealerScore}</span>
      </Points>
      <div className='card-container'>
        {dealerCards.map((card, index) => (
          <Card key={`card-index${index + 1}`} card={card} />
        ))}
      </div>
    </Col>
  );
};

export default Dealer;
