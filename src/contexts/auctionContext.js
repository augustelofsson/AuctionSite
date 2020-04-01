import React, {createContext, useEffect, useState } from 'react';

const API_URL = 'http://nackowskis.azurewebsites.net/api/';
const GROUP_NUM = 2230;

export const AuctionContext = createContext();

export const AuctionProvider = (props) => {
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
            const list = data.filter(auc =>
                auc.Titel.toLowerCase().includes(str)
            );
            setAuctions(list);
        })
    }
    
    const handleAdd = async (auction) => {
        auction.Gruppkod = GROUP_NUM;
        setIsLoading(true);
        
        await fetch(API_URL + 'auktion/' + GROUP_NUM, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(auction)
        });
             
        handleGetList();
    }
   
    const handleDelete = async (id) => {
        setIsLoading(true);
        fetch(API_URL + 'auktion/' + GROUP_NUM + '?id=' + id, {
            method: 'DELETE'
        });
        handleGetList();
    }

    const handleUpdate = async (auction) => {
        setIsLoading(true);
        fetch(API_URL + 'auktion/'+ GROUP_NUM + '/' + auction.id, {
            method: 'PUT',
            body: JSON.stringify(auction)
        });
        handleGetList();
    }

    const handleSearchChange = (e) => {
        //setSearch(e.target.value)
        handleGetList(e.target.value);
    }

    const handleReturnHome = () => {
        //setSearch('');
        handleGetList();
    }

    useEffect(() => {
         if (isLoading) {
            handleGetList();
         }
    }, [auctions])
   
    return <AuctionContext.Provider value={{ auctions, isLoading, handleAdd, handleDelete, handleUpdate, handleSearchChange, handleReturnHome }}>
        {props.children}
        </AuctionContext.Provider>
}

export default AuctionProvider;