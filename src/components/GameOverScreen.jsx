import React, { useEffect, useState } from 'react';
import Confetti from 'react-dom-confetti';

import Button from './Button';
import Banner from './Banner';

import '../sass/GameOverScreen.scss';

const confettiConfig = {
        angle: 90,
        spread: "215",
        startVelocity: 40,
        elementCount: 70,
        dragFriction: 0.12,
        duration: "4260",
        stagger: 3,
        width: "12px",
        height: "12px",
        perspective: "500px",
        colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
};

const GameOverScreen = ({ history, location: { state } }) => {
    const [trigger, setTrigger] = useState(false);

    useEffect(() => { 
        state.logo === 'parabens' && setTimeout(() => { setTrigger(true); }, 900);  // eslint-disable-next-line
    }, []);

    return (
        <div className="container container--gameover"> 
            <img src={require(`../assets/logo_${state.logo}.png`)} className={`gameover__logo gameover__logo--${state.logo}`} alt={state.logo}/>
            <Banner> {state.msg} </Banner>  
            <Confetti config={confettiConfig} active={trigger}/> 
            <img src={require(`../assets/${state.image}.png`)} className={`gameover__image gameover__image--${state.image}`} alt={state.image}/>
            <div className="gameover__btn-container">
                <Button clicked={() => history.goBack()}> Tentar de novo </Button> 
                <Button clicked={() => history.push('/')}> Voltar para o menu </Button>
            </div>
        </div>
    )
}

export default GameOverScreen;