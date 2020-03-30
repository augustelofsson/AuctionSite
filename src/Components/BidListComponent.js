import React, { useEffect, useContext } from 'react';
import { BidContext } from '../contexts/BidContext';
import Bid from './Bid';

const BidListComponent = ({ auktionID }) => {
  const { GetBids, bids } = useContext(BidContext);

  useEffect(() => {
    GetBids(auktionID);
  }, []);

  return (
    <div>
      {bids.map(bid => {
        return <Bid key={bid.BudID} total={bid.Summa} bidder={bid.Budgivare} />;
      })}
    </div>
  );
};

export default BidListComponent;
