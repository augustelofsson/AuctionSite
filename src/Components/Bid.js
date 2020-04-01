import React from 'react';

const Bid = ({ total, bidder }) => {
  return (
    <div id='bid'>
      <p>Summa: {total} kr</p>
      <p>Budgivare: {bidder}</p>
    </div>
  );
};

export default Bid;
