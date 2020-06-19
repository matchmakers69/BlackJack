import React, { useContext } from 'react';
import GameContext from '../../GameContext';
import { Col, Row } from 'react-styled-flexboxgrid';
import Player from '../Player';
import Dealer from '../Dealer';

const GameContent = () => {
  const { showGameContent } = useContext(GameContext);
  if (showGameContent) {
    return (
      <Col className='text-center' xs={12}>
        <Row>
          <Player />
          <Dealer />
        </Row>
      </Col>
    );
  }
  return (
    <Col className='text-center' xs={12}>
      Game is about to start
    </Col>
  );
};

export default GameContent;
