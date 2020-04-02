import React, { useContext, useState, useEffect } from 'react';
import { BidContext } from '../contexts/BidContext';
import { LoginContext } from '../contexts/loginContext';

const AddBid = props => {
  const { AddBid, GetBids, bids } = useContext(BidContext);
  const [BidAmount, setBidAmount] = useState(0);
  const [error, setError] = useState('');

  const auth = useContext(LoginContext);

  useEffect(() => {
    GetBids(props.value.AuktionID);
  }, []);

  const setAmount = e => {
    setBidAmount(e.target.value);
  };

  const checkBid = e => {
    e.preventDefault();

    if (auth.username === '') {
      setError('Du måste logga in för att lägga ett bud.');
    } else {
      let highestbid = 0;

      if (bids.length >= 1) {
        highestbid = bids[0].Summa;
      }

      if (highestbid >= BidAmount) {
        setError('Budet är för lågt');
      } else {
        const bidData = {
          BudID: 0,
          Summa: BidAmount,
          AuktionID: props.value,
          Budgivare: auth.username
        };
        AddBid(bidData);
        GetBids(props.value.AuktionID);
        setError('');
      }
    }
  };

  return (
    <div id='add-bid'>
      <div>
        <input type='number' defaultValue={BidAmount} onChange={setAmount} />
      </div>
      <div>
        <button onClick={checkBid}>Lägg bud</button>
      </div>
      <span>{error}</span>
    </div>
  );
};

export default AddBid;
