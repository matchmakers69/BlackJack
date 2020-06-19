import React from 'react';
import { Col, Grid, Row } from 'react-styled-flexboxgrid';
import GameHolder from '../../components/GameHolder';
const Game = () => (
  <section className='section'>
    <Grid>
      <Row>
        <Col className='text-center' xs={12}>
          <h1>BlackJack Game</h1>
        </Col>
      </Row>
      <GameHolder />
    </Grid>
  </section>
);

export default Game;
