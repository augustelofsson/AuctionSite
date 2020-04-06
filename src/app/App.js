import React from 'react';
import './Styles/App.css';
import LoginContextProvider from '../contexts/loginContext';
import AuctionContextProvider from '../contexts/auctionContext';
import AuctionList from '../Components/AuctionList';
import BidContextProvider from '../contexts/BidContext';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';


const App = () => {
  return (
    <LoginContextProvider>
      <AuctionContextProvider>
        <BidContextProvider>
            <NavBar />
            <AuctionList/>
            <Footer/>            
        </BidContextProvider>
      </AuctionContextProvider>
     </LoginContextProvider>
  );
}

export default App;
