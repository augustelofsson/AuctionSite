import React from 'react';

const Bid = ({ total, bidder }) => {
  return (
    <div>
      <h3>{total}</h3>
      <p>{bidder}</p>
    </div>
  );
};

export default Bid;
