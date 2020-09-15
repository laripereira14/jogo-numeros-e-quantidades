import React from 'react';

import logo from './../assets/logo.png';

import './../sass/LoadingScreen.scss';

const ProgressBar = () => {
    return (
        <div className="progress-bar">
          <span/>
        </div>
    )
}

const LoadingScreen = () => {
  return (
      <div className="loading">
          <img src={logo} className="loading__logo" alt="logo"/>
          <ProgressBar/>
      </div>
  );
}

export default LoadingScreen;
