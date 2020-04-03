import React from 'react';

const Bid = ({total, bidder, isOpen }) => {
  return (
    <div id='bid'>
      {
      isOpen ? (
        <div>
      <p>Summa: {total} kr</p>
      <p>Budgivare: {bidder}</p>
      </div>
      ):(
        <div>
        <p>HögstaBud: {total} kr</p>
        <p>Budgivare: {bidder}</p>
        </div>
     )}
    </div>
 
  );
}

export default Bid;
