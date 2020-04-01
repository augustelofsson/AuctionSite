import React, { useEffect, useContext } from 'react';
import { BidContext } from '../contexts/BidContext';
import Bid from './Bid';

const BidList = ({ auktionID }) => {
  const {GetBids, bids} = useContext(BidContext);

  useEffect(() => {
    
  }, [auktionID]);

  return (
    <div>
      {console.log('bidlist: ' + bids.length)}
    </div>
  );
};

export default BidList;
