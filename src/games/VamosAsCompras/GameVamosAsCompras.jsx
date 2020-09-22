import React, { Component } from 'react';

import Modal from '../../components/Modal';
import { default as TimerCard } from '../../components/Card';
import { Cart, Shelf, List, Timer } from './UIComponents';

import { randomize as generateRandom } from '../../helpers';
import "../../sass/GameVamosAsCompras.scss";

class GameVamosAsCompras extends Component {
    
    state = {
        items: ['maçã', 'banana', 'cenoura', 'pão', 'leite', 'ovo', 'refri', 'biscoito', 'chocolate', 'suco'],
        currentList: {},
        dragged: false,
        modal: {show: true, type: 'como-jogar', message: 'Arraste os itens da estante para o carrinho de acordo com a lista de compras. Mas seja rápido: Você só tem 45 segundos!'}
    }

    generateList = () => {
        let list = {};
        for (let i=0; i < 5; i++) {
            const qtd = generateRandom(9) + 1;
            const item = this.state.items[generateRandom(this.state.items.length)];
            if (list.hasOwnProperty(item) || Object.values(list).includes(qtd)) {
               i--; 
            } else {
               list[item] = qtd;  
            }
        }
        this.setState({currentList: list});
    }
    
    roundHandler = () => {
        this.generateList();
        this.setState({
            modal: { show: false }
        })
    }

    dropHandler = (e) => {
        console.log(e);
        const itemMatch = Object.keys(this.state.currentList).some(el => el === e.dragData);
        if (itemMatch) {
            if (this.state.currentList[e.dragData] !== 0) {
              this.setState(prevState => ({
                    currentList: {...prevState.currentList, [e.dragData]: prevState.currentList[e.dragData]--}
            }), () => { 
                    if (Object.values(this.state.currentList).every(v => v === 0)) {
                        this.props.history.push({
                            pathname: '/game-over',
                            state: { 
                                'logo': 'parabens',
                                'image': 'trofeu',
                                'msg': 'Você fez as compras direitinho!' 
                            }
                        });
                    }
                });  
            }
            
        } 
        
    }

    timerIsUpHandler = () => {
       this.props.history.push({
            pathname: '/game-over',
            state: {
                'logo': 'opa',
                'image': 'time-is-up',
                'msg': 'Poxa, o tempo acabou!'
            }
        });
    }
   
    render() {
        const { currentList, modal, items } = this.state;
        return (
            <div className="container container--games">
                <div className="vamos-as-compras__container">
                {!modal.show ?
                <>
                        <Shelf items={items} onDrop={this.dropHandler}/>
                        <List items={currentList}/>
                        <Cart />
                        <div className="vamos-as-compras__timer"> 
                            <TimerCard styles="card card--timer" >
                              <Timer handleTimer={this.timerIsUpHandler}/>
                            </TimerCard>
                        </div>
                </>
                    :
                <Modal type={modal.type} message={modal.message} onStartGame={this.roundHandler}/>}
                </div>
            </div>
        )
    }
}

export default GameVamosAsCompras;

