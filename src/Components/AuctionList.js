import React, { useContext, useState } from 'react';
import {
  Col,
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

  let items = auctions.map((product) =>{ 
    return (
      <Col className="col-3" key={product.AuktionID}>
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
          <Card.Footer classname="text-center" id="ft">Utropspris: {product.Utropspris}</Card.Footer>
        </Card.Body>
      </Card>
      </Col>
    );
  });

  return (
    <Container
      fluid
      className='d-flex flex-row flex-wrap justify-content-center'
      style={{width : '80%'}}
    >
      {items}
      <Modal show={modalOpen} onHide={() => setModalOpen(false)}>
        <AuctionDetailed values={detailed} setModalOpen={setModalOpen} SkapadAv={detailed.SkapadAv} />
        <Button  id= "close" variant='primary' onClick={() => setModalOpen(false)}>
          Stäng
        </Button>
      </Modal>
    </Container>
  );
};
export default AuctionList;
