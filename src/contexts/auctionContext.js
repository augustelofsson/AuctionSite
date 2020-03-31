import React, {createContext, useEffect, useState } from 'react';

const API_URL = 'http://nackowskis.azurewebsites.net/api/';
const GROUP_NUM = 2230;

export const AuctionContext = React.createContext();

export const AuctionProvider = (props) => {
    const [auctions, setAuctions] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [search, setSearch]= useState('');
   
   
    const handleGetList = async () => {
        await fetch(API_URL + 'auktion/' + GROUP_NUM, {
            method: 'GET'
        })
        .then(response => {
            return response.json();
        })
        .then(data => {
            setIsLoading(false);
            if (search !='') // filter if there is something
            {
                const list = data.filter(auc =>
                    auc.Titel.toLowerCase().includes(search)
                  );
                  setAuctions(list);
                  return;
            }
          
            setAuctions(data);
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

   const handleSubmit = async (e) => {
         e.preventDefault()
          handleGetList()
        setIsLoading(false)
   }
        const handleSearchChange = (e) => {
            setSearch(e.target.value)
            handleGetList();
          }
          const handleReturnHome = () => {
            setSearch('');
            handleGetList();
            
           }
   
    useEffect(() => {
         console.log(auctions);
         if (isLoading) {
         handleGetList();
         }
    }, [auctions])

   
    return <AuctionContext.Provider value={{ auctions, isLoading, handleAdd,handleDelete, handleUpdate, handleSubmit, handleSearchChange, handleReturnHome}}>
        {props.children}
        </AuctionContext.Provider>
}

export default AuctionProvider;