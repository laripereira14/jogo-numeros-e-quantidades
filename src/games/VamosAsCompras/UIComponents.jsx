import React, { useState, useEffect } from 'react';
import { DragDropContainer, DropTarget } from 'react-drag-drop-container';

export const Shelf = props => {
    return (
        <div className="shelf">
            <div className="shelf__container">
            {React.Children.map(props.items, cur => 
                <DragDropContainer key="dnd" dragClone dragElemOpacity="1" onDrop={(e) => props.onDrop(e)} dragData={cur}>
                    <img className="shelf__item" src={require(`../../assets/VamosAsCompras/${cur}.png`)} alt="shelf"/>
                </DragDropContainer>)}
            </div>
        </div>
    )
}

export const Cart = () => {
    return (
        <div className="cart__container">
            <DropTarget key="dnd">
                <img src={require(`../../assets/VamosAsCompras/cart.png`)} className="cart ml-pos" alt="cart"/>
            </DropTarget>
        </div>
    )   
}

export const List = props => {
    return (
        <div className="list__container">
            <ul className="list">
              {Object.entries(props.items).map(cur =>   
                <li className={"list__item " + (cur[1] !== 0 ? "" : "list__item--disabled")} key={cur[0]}>
                    <span className="list__item--qtd"> {cur[1]} </span> 
                    <img className="list__item--img" src={require(`../../assets/VamosAsCompras/${cur[0]}.png`)} alt={cur[0]}/>    
                </li>
            )};
            </ul>
        </div>
    )
}

export const Timer = props => {
    const [seconds, setSeconds] = useState(45);

    useEffect(() => {
        if (seconds === 0) { props.handleTimer() };
        const timer =
          seconds > 0 && setInterval(() => setSeconds(seconds - 1), 1000);
        return () => clearInterval(timer);  
      }, [seconds, props]);

    return <> {seconds} </>
}

