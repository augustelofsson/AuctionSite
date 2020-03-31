import React, {useContext, useEffect, useState } from 'react';
import {AuctionContext} from '../contexts/auctionContext';

const Search= ()=>{
  const appContext = useContext(AuctionContext)
  const {handleSubmit, handleSearchChange, auctions, handleReturnHome } = appContext

      
  return (<React.Fragment>
    <div>
        <button type="button"
          onClick={() => handleReturnHome()}>
           Home
        </button>
      
        </div>            
         
			  
        <form onSubmit={(e) => handleSubmit(e)}>
        <label>Search:</label>
        <input onChange={(e) => handleSearchChange(e)} type="text" c placeholder="Search.." />
        <button type="submit" >Search</button>
        </form>

  </React.Fragment>
   
   )
}


export default Search;
