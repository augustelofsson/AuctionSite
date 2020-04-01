import React from 'react';
import './App.css';
import LoginContextProvider from '../contexts/loginContext';
import AuctionContextProvider from '../contexts/auctionContext';
import AuctionList from '../Components/AuctionList';
import BidContextProvider from '../contexts/BidContext';
import NavBar from '../Components/NavBar';

const App = () => {
  return (
    <LoginContextProvider>
      <AuctionContextProvider>
        <BidContextProvider>
            <NavBar />
            <AuctionList/>            
        </BidContextProvider>
      </AuctionContextProvider>
     </LoginContextProvider>
  );
}

export default App;
