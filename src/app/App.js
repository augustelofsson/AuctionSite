import React from 'react';
import './App.css';
import AuctionContextProvider from '../contexts/auctionContext';
import AuctionForm  from '../Components/AuctionForm';
import AuctionList from '../Components/AuctionList';

const App = () => {
  return (
     <AuctionContextProvider>
    
    <div className="App">
   
      <h1>Grupparbete frontend2</h1>
      <div>
        
      < AuctionForm/>
      </div>  
  
       <div>
      < AuctionList/>
      </div>  
  
    </div>
     </AuctionContextProvider>
  );
}

export default App;
