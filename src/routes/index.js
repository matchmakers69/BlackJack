import React from 'react';
import { Route, Switch } from 'react-router';
import StartGame from '../views/StartGame';
import Game from '../views/Game';

const Routes = () => (
  <Switch>
    <Route exact path='/' component={StartGame} />
    <Route exact path='/new-game' component={Game} />
  </Switch>
);
export default Routes;
