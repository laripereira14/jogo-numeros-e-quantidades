import React from 'react';
import { Route } from 'react-router-dom';

import GameQuantosTem from './games/QuantosTem/GameQuantosTem';
import GameVamosAsCompras from './games/VamosAsCompras/GameVamosAsCompras';
import Menu from './components/Menu';
import GameOverScreen from './components/GameOverScreen';

import './sass/App.scss';
import './sass/CommonComponents.scss';
import './sass/Animations.scss';

const App = () => {
  window.scrollTo(0,1);
  return ( 
    <div className="app">
      <Route path="/" exact component={Menu}/>
      <Route path="/quantos-tem" component={GameQuantosTem}/>
      <Route path="/vamos-as-compras" component={GameVamosAsCompras}/>
      <Route path="/game-over" component={GameOverScreen}/>
    </div>
  );
}

export default App;