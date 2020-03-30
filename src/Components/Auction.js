import React from 'react';

const Auction = (props) => {
    const handleClick = () => {
        // GOTO DETAILED
    }

    return (
        <div onClick={() => handleClick}>
            <h3>{props.titel}</h3>
            <p>{props.beskrivning}</p>
            <span>{props.pris}</span>
        </div>
    )
}

export default Auction;
