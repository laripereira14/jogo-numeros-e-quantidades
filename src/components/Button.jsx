import React from 'react';

const Button = props => {
  return (
    <button className="btn btn--start-game" onClick={props.clicked}> {props.children} </button>
  );
}

export default Button;
