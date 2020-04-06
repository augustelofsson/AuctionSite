import React, { createContext, useEffect, useState } from 'react';
import moment from 'moment';

const API_URL = 'http://nackowskis.azurewebsites.net/api/';
const GROUP_NUM = 2230;

export const AuctionContext = createContext();

export const AuctionProvider = props => {
  const [auctions, setAuctions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleGetList = async (str = '') => {
    setIsLoading(true);
    await fetch(API_URL + 'auktion/' + GROUP_NUM, {
      method: 'GET'
    })
    .then(response => {
      return response.json();
    })
    .then(data => {
      setIsLoading(false);
       data.forEach(element => {
        element.SlutDatum = moment.utc(element.SlutDatum, 'YYYY-MM-DD HH:mm:ss').local().toDate();
        element.StartDatum = moment.utc(element.StartDatum, 'YYYY-MM-DD HH:mm:ss').local().toDate();
       });
      
      if (str === '') {
        var d = new Date();
        let list = data.filter(auc => 
          auc.Titel.toLowerCase().includes(str.toLowerCase()) && new Date(auc.StartDatum) < d && new Date(auc.SlutDatum) > d
        );
        list = list.sort(function(a, b) {
          a = new Date(a.SlutDatum);
          b = new Date(b.SlutDatum);
          return b > a ? -1 : a < b ? 1 : 0;
        });
        setAuctions(list);
      } else {
        const list = data.filter(auc => auc.Titel.toLowerCase().includes(str.toLowerCase()));
        let now = new Date();

        let closed = [];
        let open = [];
        list.forEach(a => {
          if (a.SlutDatum > now) {
            open.push(a);
          } else {
            closed.push(a);
          }
          return;
        });

        open = open.sort(function(a, b) {
          a = new Date(a.SlutDatum);
          b = new Date(b.SlutDatum);
          return b > a ? -1 : a < b ? 1 : 0;
        });

        closed = closed.sort(function(a, b) {
          a = new Date(a.SlutDatum);
          b = new Date(b.SlutDatum);
          return a > b ? -1 : a < b ? 1 : 0;
        });

        let sorted = [ ...open, ...closed ];
        setAuctions(sorted);
      }
    });
  };

  const handleAdd = async auction => {
    auction.Gruppkod = GROUP_NUM;
    setIsLoading(true);

    auction.StartDatum = moment.utc(auction.StartDatum).toDate();
    auction.SlutDatum = moment.utc(auction.SlutDatum).toDate();

    await fetch(API_URL + 'auktion/' + GROUP_NUM, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(auction)
    });

    handleGetList();
  };

  const handleDelete = async id => {
    setIsLoading(true);
    fetch(API_URL + 'auktion/' + GROUP_NUM + '?id=' + id, {
      method: 'DELETE'
    }).then(res => {
      handleGetList();
    });
  };

  const handleUpdate = async (auction) => {
    auction.StartDatum = moment.utc(auction.StartDatum).toDate();
    auction.SlutDatum = moment.utc(auction.SlutDatum).toDate();

    setIsLoading(true);
    console.log(auction.AuktionID);
    fetch(API_URL + 'auktion/' + GROUP_NUM + '/' + auction.AuktionID, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(auction)
    }).then(() => {
      handleGetList();
    })
    .catch(err => {
      console.log('error');
      console.log(err);
    })
  };

  const handleSearchChange = e => {
    //setSearch(e.target.value)
    handleGetList(e.target.value);
  };

  const handleReturnHome = () => {
    //setSearch('');
    handleGetList();
  };

  useEffect(() => {
    if (isLoading) {
      handleGetList();
    }
  }, [auctions]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <AuctionContext.Provider
      value={{
        auctions,
        isLoading,
        handleAdd,
        handleDelete,
        handleUpdate,
        handleSearchChange,
        handleReturnHome
      }}
    >
      {props.children}
    </AuctionContext.Provider>
  );
};

export default AuctionProvider;
