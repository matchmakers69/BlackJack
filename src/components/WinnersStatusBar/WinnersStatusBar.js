import React, { useContext } from 'react';
import GameContext from '../../GameContext';
import { Col } from 'react-styled-flexboxgrid';
import { WinnersBar } from './WinnersBarStyles';

const WinnersStatusBar = () => {
  const { gameInfoMessage, resetGame } = useContext(GameContext);
  return (
    <Col xs={12}>
      <WinnersBar>
        <p className='status-message'>{gameInfoMessage}</p>
        <button onClick={resetGame}>Reset</button>
      </WinnersBar>
    </Col>
  );
};

export default WinnersStatusBar;
