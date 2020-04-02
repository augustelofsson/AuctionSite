import React, { useEffect, useContext } from 'react';
import { BidContext } from '../contexts/BidContext';
import Bid from './Bid';

const BidList = ({ auktionID }) => {
  const { bids } = useContext(BidContext);

  useEffect(() => {}, [auktionID]);

  return (
    <div id='bid-list'>
      {bids.length ? (
        <>
          {bids.map(bid => {
            return (
              <Bid key={bid.BudID} total={bid.Summa} bidder={bid.Budgivare} />
            );
          })}
        </>
      ) : (
        <>
          <h4>Det finns inga bud för den här auktionen.</h4>
        </>
      )}
    </div>
  );
};

export default BidList;
