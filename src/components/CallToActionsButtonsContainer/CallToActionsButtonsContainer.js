import React, { useContext } from 'react';
import GameContext from '../../GameContext';
import { ButtonsContainer } from './ButtonsContainerStyles';
import { Col } from 'react-styled-flexboxgrid';

const CallToActionsButtonsContainer = () => {
  const {
    hideDealButton,
    dealDeck,
    hitDeck,
    standDeck,
    standClicked,
    showGameContent,
  } = useContext(GameContext);
  return (
    <Col className='text-center' xs={12}>
      <ButtonsContainer>
        {hideDealButton && (
          <button className='cta-button' onClick={dealDeck}>
            <span>Deal and God with you </span>
          </button>
        )}{' '}
        {showGameContent && (
          <div className='button-container'>
            <button
              disabled={standClicked}
              onClick={hitDeck}
              type='button'
              className='cta-button'
            >
              <span>Hit</span>
            </button>
            <button onClick={standDeck} type='button' className='cta-button'>
              <span>Stand</span>
            </button>
          </div>
        )}
      </ButtonsContainer>
    </Col>
  );
};

export default CallToActionsButtonsContainer;
