import React from 'react';

export const Background = (props) => {
    return (
        <div className="quantos-tem__container">
            <img className="cloud cloud-1" alt="" src={require(`../../assets/QuantosTem/cloud-1.png`)}/>
            <img className="cloud cloud-2" alt="" src={require(`../../assets/QuantosTem/cloud-2.png`)}/>
            <img className="cloud cloud-3" alt="" src={require(`../../assets/QuantosTem/cloud-3.png`)}/>
            {props.children} 
        </div>
    )
}

export const Image = (props) => {
  return <img src={require(`../../assets/QuantosTem/${props.info.img}.png`)} className="image" alt={props.info.img}/>
}
