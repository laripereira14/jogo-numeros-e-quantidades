import React from 'react';

const Card = (props) => {
    return (
        <div onClick={props.click ? (e) => props.click(e) : null} className={props.styles}>
            {props.children}
        </div>
    )
}

export default Card;