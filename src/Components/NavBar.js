import React, {useContext, useEffect, useState } from 'react';
import { Navbar, Form, FormControl, Button } from 'react-bootstrap';
import Login from './Login';
import AuctionForm  from '../Components/AuctionForm';
import Search from '../Components/Search';

import {AuctionContext} from '../contexts/auctionContext';

const NavBar = () => {
    
    return (
        <Navbar bg="light" variant="light">
            
            <Navbar.Brand href="#home">Grupp4's auktions sidas namn</Navbar.Brand>
            <Search/>
            <Login/>
            <AuctionForm/>
             </Navbar>
             
    )
}

export default NavBar;



