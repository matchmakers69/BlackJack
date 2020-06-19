import React, { useContext } from 'react';
import { Col } from 'react-styled-flexboxgrid';
import GameContext from '../../GameContext';
import Card from '../Card';
import { Points } from './PlayerStyles';

const Player = () => {
  const { playerCards, getScoreByPlayer } = useContext(GameContext);

  const playerScore = getScoreByPlayer(playerCards);

  return (
    <Col xs={6}>
      <h2>Player</h2>
      <h3>Player's points</h3>
      <Points>
        <span>{playerScore}</span>
      </Points>
      <div className='card-container'>
        {playerCards.map((card, index) => (
          <Card key={`card-index${index + 1}`} card={card} />
        ))}
      </div>
    </Col>
  );
};

export default Player;
