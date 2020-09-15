import React, { Component } from 'react';

import Modal from '../../components/Modal';
import { default as NumberCard } from '../../components/Card';
import { Background, Image } from './UIComponents';

import { randomize as generateRandom, shuffle, wordBuilder } from '../../helpers';
import "../../sass/GameQuantosTem.scss";

class GameQuantosTem extends Component {
    state = {
        images: ['bala', 'flor', 'joaninha', 'laço', 'lápis', 'pipa', 'ursinho', 'patinho', 'blusa', 'estrela'],
        rounds: 0,
        score: 0,
        current: {quantity: 0, img: ''},
        past: {quantity: [], img: []},
        allNumbers: [],
        modal: {show: true, type: 'como-jogar', message: 'Clique no número correspondente a quantidade de desenhos'}
    }

    generateCurrent = () => {
        let currentNumber = generateRandom(30) + 1;
        let currentImg = this.state.images[generateRandom(this.state.images.length, this.state.past.img)]
        if (this.state.past.img.includes(currentImg) || this.state.past.quantity.includes(currentNumber)) {
            this.generateCurrent(); 
        } else {
            this.setState({
                current: {
                    quantity: currentNumber,
                    img: currentImg
                }
            });
        }  
    }

    generateAllNumbers = () => {
        const numbers = [this.state.current.quantity];
        for (let i=1; i<4; i++) {
            let rndNum = generateRandom(30) + 1;
            if (numbers.includes(rndNum)) {
                i--;
            } else {
               numbers.push(rndNum);
            }
        }
        this.setState({allNumbers: shuffle(numbers)});
    }
    
    clickHandler = (e) => {
       
        if (this.state.current.quantity === parseInt(e.nativeEvent.path[0].innerText)) {
            this.setState(prevState => ({
                score: prevState.score + 1,
                modal: { 
                    show: true, 
                    type: 'parabens', 
                    message: `Havia ${prevState.current.quantity} ${wordBuilder(prevState.current.img, prevState.current.quantity)}`
                }
            }));
            
        } else {
            this.setState(prevState => ({
                modal: { 
                    show: true, 
                    type: 'opa', 
                    message: `Havia ${prevState.current.quantity} ${wordBuilder(prevState.current.img, prevState.current.quantity)}`
                }
            }));
            
        }

        setTimeout(() => {
            this.roundHandler();
        }, 2500); 
    }


    roundHandler = () => {
        if (this.state.rounds !== 10) {
            this.generateCurrent();
            this.setState(prevState => ({
                modal: { show: false },
                rounds: prevState.rounds + 1,
                past: {
                    quantity: [...prevState.past.quantity, prevState.current.quantity],
                    img: [...prevState.past.img, prevState.current.img]
                }
            }), () => {
                this.generateAllNumbers();
            });
        } else {
            let score = this.state.score;
            this.props.history.push({
                pathname: '/game-over',
                state: { 
                    score, 
                    'game': 'QuantosTem', 
                    'logo': 'parabens',
                    'image': 'medalha',
                    'msg': `Você fez ${score} ${score === 1 ? 'ponto' : 'pontos'}!`
                }
            });
        }    
    }

    render() {
        const { current, allNumbers, modal } = this.state;
        let imageItems = [];
        for (let i=0; i < current.quantity; i++) {
            imageItems.push(<Image info={current} />)
        }
        return (
            <div className="container container--games"> 
                <Background>
                    {!modal.show ? 
                        <>
                            <img src={require("../../assets/QuantosTem/logo.png")} className="quantos-tem__logo" alt="Quantos Tem?" /> 
                            <div className={`quantos-tem__img-container ${current.quantity >= 25 ? 'ml' : ''}`}>
                                {React.Children.map(imageItems, cur => cur)}
                            </div>
                            <div className="quantos-tem__numbers-container"> 
                                {React.Children.map(allNumbers, cur => <NumberCard click={this.clickHandler} styles="card card--number"> {cur} </NumberCard>)}
                            </div> 
                        </>
                    : <Modal type={modal.type} message={modal.message} onStartGame={this.roundHandler}/>}
                </Background>
            </div>
                
                
        );

    }
}

export default GameQuantosTem;
