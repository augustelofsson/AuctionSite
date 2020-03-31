import React, {useContext, useEffect, useState } from 'react';
import { Navbar, Form, FormControl, Button } from 'react-bootstrap';
import Login from './Login';
import AuctionForm  from '../Components/AuctionForm';

import {AuctionContext} from '../contexts/auctionContext';

const NavBar = () => {
    const appContext = useContext(AuctionContext)
  const {handleSubmit, handleSearchChange, auctions, handleReturnHome } = appContext

    return (
        <Navbar bg="light" variant="light">
            <Navbar.Brand href="#home">Grupp4's auktions sidas namn</Navbar.Brand>
            <Form inline onSubmit={(e) => handleSubmit(e)}>
                <FormControl onChange={(e) => handleSearchChange(e)} type="text" placeholder="Söktext" className="mr-sm-2" />
                <Button variant="outline-primary" type="button"
          onClick={() => handleReturnHome()}>Home</Button>
            </Form>
            <Login/>
            <AuctionForm/>
        </Navbar>
    )
}

export default NavBar;



