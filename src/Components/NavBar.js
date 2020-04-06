import React, { useContext } from 'react';
import { Navbar } from 'react-bootstrap';
import Login from './Login';
import AuctionForm from '../Components/AuctionForm';
import Search from '../Components/Search';
import { AuctionContext } from '../contexts/auctionContext';

const NavBar = () => {
  const context = useContext(AuctionContext);

  const handleReset = () => {
    let doc = document.getElementById('searchInput');
    doc.value = '';
    context.handleReturnHome();
  };

  return (
    <Navbar className="nav" id ="Navbar" >
      <Navbar.Brand href='#' onClick={handleReset}>
        Stjärnleif's Auktioner
      </Navbar.Brand>
      <Search />
      <AuctionForm />
      <Login />
    </Navbar>
  );
};

export default NavBar;
