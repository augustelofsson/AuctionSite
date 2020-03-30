import React from 'react';
import './App.css';
import AuctionContextProvider from '../contexts/auctionContext';
import AuctionForm  from '../Components/AuctionForm';
import AuctionList from '../Components/AuctionList';
import AddBid from '../Components/AddBid';
import BidContextProvider from '../contexts/BidContext';
import LoginContextProvider from '../contexts/loginContext';

const App = () => {
  return (
    <LoginContextProvider>
      <AuctionContextProvider>
        <BidContextProvider>
          <div className="App">
            <h1>Grupparbete frontend2</h1>
            <AuctionForm/>
            <AuctionList/>
            <AddBid/>
          </div>
        </BidContextProvider>
      </AuctionContextProvider>
     </LoginContextProvider>
  );
}

export default App;
