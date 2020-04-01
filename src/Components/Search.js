import React, {useContext } from 'react';
import {AuctionContext} from '../contexts/auctionContext';

const Search = () => {
  const appContext = useContext(AuctionContext)
  const { handleSearchChange } = appContext
      
  return (
    <>
      <input id='searchInput' onChange={(e) => handleSearchChange(e)} type="text" placeholder="Sök auktioner" />
    </>
   )
}

export default Search;
