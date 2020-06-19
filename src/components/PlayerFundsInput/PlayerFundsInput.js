import React, { useContext } from 'react';
import GameContext from '../../GameContext';
import { Wrapper } from './PlayerFundsInputStyles';
import { Col } from 'react-styled-flexboxgrid';

const PlayerFundsInput = () => {
  const {
    betValue,
    onChange,
    startedGame,
    handlePlaceBet,
    alertMessage,
  } = useContext(GameContext);
  if (!startedGame) {
    return (
      <Col className='text-center' xs={12}>
        <Wrapper>
          <div className='betWrapperInner'>
            <input
              onChange={onChange}
              name='value'
              value={betValue.value}
              type='text'
              placeholder='Please enter your bet'
            />
            <button
              className='cta-button'
              disabled={betValue.value === '' || betValue.value === '0'}
              type='button'
              onClick={handlePlaceBet}
            >
              <span>Place your bet</span>
            </button>
          </div>
          <span className='inputInfo'>{alertMessage}</span>
        </Wrapper>
      </Col>
    );
  }
  return null;
};

export default PlayerFundsInput;
