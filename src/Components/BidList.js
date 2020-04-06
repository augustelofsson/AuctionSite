import React, { useEffect, useContext } from 'react';
import { BidContext } from '../contexts/BidContext';
import Bid from './Bid';
import '../app/Styles/Bid.css';

const BidList = ({ auktionID, isOpen }) => {
  const { bids } = useContext(BidContext);

  useEffect(() => {}, [auktionID]);
  return (
    <div id='bid-list'>


      {bids.length ? (
        <>
          {
             isOpen ? (
              bids.map(bid => {
                return (
                  <Bid key={bid.BudID} total={bid.Summa} bidder={bid.Budgivare} isOpen={isOpen}/>
                );
              })
             ) : (

              <Bid key={bids[0].BudID} total={bids[0].Summa} bidder={bids[0].Budgivare}isOpen={isOpen} /> 
             )
           }

        </>
      ) : (
        <>
          <h4 className='empty-bid-list'>Det finns inga bud för den här auktionen.</h4>
        </>
      )}
    </div>
  );
};

export default BidList;
