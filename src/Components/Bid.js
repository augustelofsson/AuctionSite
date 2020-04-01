import React from 'react';

const Bid = ({ total, bidder }) => {
  return (
    <div id='bid'>
      <h3>Summa:{total}</h3>
      <p>{bidder}</p>
    </div>
  );
};

export default Bid;
