import React, { useState, useEffect } from 'react';

import LoadingScreen from './LoadingScreen';
import Banner from './Banner';

import logo from './../assets/logo.png';

import '../sass/App.scss';

const Menu = (props) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3500);   
  }, []);

  return (
      loading ? <LoadingScreen/> : 
      <div className="container">
        <img src={logo} className="container__logo" alt="logo"/>
        <div className="top"> <Banner> Escolha um jogo </Banner> </div>
        <div className="container__games-card">
          <div className="container__games-card__card card--quantos-tem" onClick={() => props.history.push('/quantos-tem')}/>
          <div className="container__games-card__card card--vamos-as-compras" onClick={() => props.history.push('/vamos-as-compras')}/>
        </div>
      </div>
  );
}

export default Menu;