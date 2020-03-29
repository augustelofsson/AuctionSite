import React from 'react';
import './App.css';
import AuctionContextProvider from '../contexts/auctionContext';
import AuctionForm  from '../Components/AuctionForm';
import AuctionList from '../Components/AuctionList';
import BidContextProvider from '../contexts/BidContext';

const App = () => {
  return (
     <AuctionContextProvider>
    <BidContextProvider>
    <div className="App">
   
      <h1>Grupparbete frontend2</h1>
      < AuctionForm/>
      < AuctionList/>
    </div>
    

    </BidContextProvider>
     </AuctionContextProvider>
     
  );
}

export default App;
