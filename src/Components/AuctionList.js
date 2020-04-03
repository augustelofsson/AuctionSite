import React, { useContext, useState } from 'react';
import {
  Card,
  Modal,
  Button,
  Container
} from 'react-bootstrap';
import { AuctionContext } from '../contexts/auctionContext';
import AuctionDetailed from '../Components/AuctionDetailed';

const AuctionList = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [detailed, setDetailed] = useState({});

  const { auctions } = useContext(AuctionContext);

  let items = auctions.map(product => { 
    return (
      <Card className='card text-center mt-3 mr-1' key={product.AuktionID}>
        <Card.Body
          border='light'
          className='card-body text-dark mr-1 ml-1'
          onClick={() => {
            setDetailed(product);
            setModalOpen(true);
          }}
        >
          <Card.Title>{product.Titel}</Card.Title>
          <Card.Text className='card-text text-secondary'>
            {product.Beskrivning}
          </Card.Text>
          <Card.Footer>Utropspris: {product.Utropspris}</Card.Footer>
        </Card.Body>
      </Card>
    );
  });

  return (
    <Container
      fluid
      className='d-flex flex-row flex-wrap justify-content-center m-1'
    >
      {items}
      <Modal show={modalOpen} onHide={() => setModalOpen(false)}>
        <AuctionDetailed values={detailed} setModalOpen={setModalOpen} SkapadAv={detailed.SkapadAv} />
        <Button variant='primary' onClick={() => setModalOpen(false)}>
          Stäng
        </Button>
      </Modal>
    </Container>
  );
};
export default AuctionList;
