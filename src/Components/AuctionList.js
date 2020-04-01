import React, { useContext, useState } from 'react';
import { Card, Modal, Button } from 'react-bootstrap';
import {AuctionContext} from '../contexts/auctionContext';
import AuctionDetailed from '../Components/AuctionDetailed';

const AuctionList=()=>{
    const [modalOpen, setModalOpen] = useState(false);
    const [detailed, setDetailed] = useState({});
    
    const { auctions } = useContext(AuctionContext);
   
    let list = auctions.map(product=>{
        return (
            <li className='d-inline-flex' key={product.AuktionID}>
                <Card onClick={() => {
                    setDetailed(product);
                    setModalOpen(true);
                }}>
                    <Card.Title>{product.Titel}</Card.Title>
                    <Card.Body>{product.Beskrivning}</Card.Body>
                </Card>
            </li>
        )
    });
    
    return(
        <div className="container">
            <div className='d-flex flex-row w-100'> 
                <ul className='list-unstyled'>
                    {list}
                </ul>
            </div>
            <Modal show={modalOpen} onHide={() => setModalOpen(false)}>
                <AuctionDetailed 
                    values={detailed}/>
                <Button variant="primary" onClick={() => setModalOpen(false)}>
                    Save Changes
                </Button>
            </Modal>
        </div>
    )
}
export default AuctionList;

