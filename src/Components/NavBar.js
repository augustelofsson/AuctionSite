import React from 'react';
import { Navbar, Form, FormControl, Button } from 'react-bootstrap';
import Login from './Login';
import AuctionForm  from '../Components/AuctionForm';

const NavBar = () => {
    return (
        <Navbar bg="light" variant="light">
            <Navbar.Brand href="#home">Grupp4's auktions sidas namn</Navbar.Brand>
            <Form inline>
                <FormControl type="text" placeholder="Söktext" className="mr-sm-2" />
                <Button variant="outline-primary">Sök</Button>
            </Form>
            <AuctionForm/>
            <Login />
        </Navbar>
    )
}

export default NavBar;
