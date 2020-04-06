import React from 'react';

const Bid = ({ total, bidder, isOpen }) => {
  return (
    <div >
      {isOpen ? (
        <div>
          <p id="par">Summa: {total} kr</p>
          <p id="par">Budgivare: {bidder}</p>
        </div>
      ) : (
        <div>
          <p id="par">HögstaBud: {total} kr</p>
          <p id="par">Budgivare: {bidder}</p>
        </div>
      )}
    </div>
  );
};

export default Bid;
