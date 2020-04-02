import React, { useContext, useState } from 'react';
import { Card, Modal, Button, Container, Row, Col, CardDeck } from 'react-bootstrap';
import {AuctionContext} from '../contexts/auctionContext';
import AuctionDetailed from '../Components/AuctionDetailed';

const AuctionList=()=>{
    const [modalOpen, setModalOpen] = useState(false);
    const [detailed, setDetailed] = useState({});
    
    const { auctions } = useContext(AuctionContext);
   
    let items = auctions.map(product=>{
        return (
            <Col className="card text-center mt-5 col-sm-4 "  key={product.AuktionID}>
            
                <Card.Body style={{margin : '10%'}}  border="light" className="card-body text-dark" onClick={() => {
                    setDetailed(product);
                    setModalOpen(true);
                }}>
                    <Card.Title>{product.Titel}</Card.Title>
                    <Card.Text className="card-text text-secondary">{product.Beskrivning}</Card.Text>
                    <Card.Footer>Utropspris: {product.Utropspris}</Card.Footer>
                </Card.Body>
                
            </Col>
        )
    });
    
    return(
        <Container className="d-flex justify-content-center">
            <Row  style={{padding : '5%'}}>     
                {items}  
            </Row>
            <Modal show={modalOpen} onHide={() => setModalOpen(false)}>
                <AuctionDetailed 
                    values={detailed}/>
                <Button variant="primary" onClick={() => setModalOpen(false)}>
                    Save Changes
                </Button>
            </Modal>
        </Container>
    )
}
export default AuctionList;

