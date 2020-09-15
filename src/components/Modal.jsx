import React from 'react';

import Button from './Button';

import '../sass/Modal.scss';

const Modal = props => {
  return (
     <div className="backdrop">
        <div className="modal">
          <img src={require(`../assets/logo_${props.type}.png`)} className={`modal__logo ${props.type === 'opa' && 'modal__logo--opa'}`} alt={props.type}/>
          <p className="modal__msg"> {props.message} </p>
            {props.type === 'como-jogar' ? <Button clicked={props.onStartGame}> Começar </Button> : null}
        </div> 
      </div> 
  );
}

export default Modal;
