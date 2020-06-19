import React from 'react';
import { Col, Grid, Row } from 'react-styled-flexboxgrid';
import { Link } from 'react-router-dom';
import { StartGameButton } from './StartGameButtonStyles';

const StartGame = () => (
  <section className='section'>
    <Grid>
      <Row>
        <Col className='text-center' xs={12}>
          <h1>Start Game</h1>
        </Col>

        <Col className='text-center' xs={12}>
          <StartGameButton>
            <Link to='/new-game'>Click here to start</Link>
          </StartGameButton>
        </Col>
      </Row>
    </Grid>
  </section>
);

export default StartGame;
