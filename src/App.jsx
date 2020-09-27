import React from 'react';
import { Route, Switch } from 'react-router-dom';

import GameQuantosTem from './games/QuantosTem/GameQuantosTem';
import GameVamosAsCompras from './games/VamosAsCompras/GameVamosAsCompras';
import Menu from './components/Menu';
import GameOverScreen from './components/GameOverScreen';

import './sass/App.scss';
import './sass/CommonComponents.scss';
import './sass/Animations.scss';

const App = () => {
  return ( 
    <div className="app">
      <Switch>
        <Route path="/" exact component={Menu}/>
        <Route path="/quantos-tem" component={GameQuantosTem}/>
        <Route path="/vamos-as-compras" component={GameVamosAsCompras}/>
        <Route path="/game-over" component={GameOverScreen}/>
        <Route component={Menu} />
      </Switch>
    </div>
  );
}

export default App;