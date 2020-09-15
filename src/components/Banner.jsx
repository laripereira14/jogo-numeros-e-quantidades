import React from 'react';

const Banner = props => {
    return (
        <div className="banner__container">
            <h1 className="banner">
                <p className="banner__content">{props.children}</p>
            </h1>
        </div>
    )
}

export default Banner;