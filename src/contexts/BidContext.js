import React, { createContext, useState, useEffect } from 'react';

const API_URL = 'http://nackowskis.azurewebsites.net/api/';
const GROUP_NUM = 2230;

export const BidContext = createContext();

export const BidContextProvider = props => {
  const [bids, setBids] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const GetBids = async id => {
    await fetch(`${API_URL}bud/${GROUP_NUM}/${id}`)
      .then(res => {
        return res.json();
      })
      .then(data => {
        data.reverse();
        setIsLoading(false);
        setBids(data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const AddBid = async bidData => {
    await fetch(`${API_URL}bud/${GROUP_NUM}/${bidData.AuktionID}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(bidData)
    });
    GetBids(bidData.AuktionID);
  };

  const GetHighestBid = () => {
    const highestBid = bids[bids.length - 1];
    return highestBid.Summa;
  };

  useEffect(() => {
    console.log('bidcontext:');
  }, [bids]);

  return (
    <BidContext.Provider
      value={{ bids, isLoading, GetBids, GetHighestBid, AddBid }}
    >
      {props.children}
    </BidContext.Provider>
  );
};

export default BidContextProvider;
