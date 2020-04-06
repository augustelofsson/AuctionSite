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
import $ from 'jquery';
import moment from 'moment';

const AuctionList = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [detailed, setDetailed] = useState({});

  const { auctions } = useContext(AuctionContext);
  $(document).ready(function(){

    $(".card").hover(
      function(){
        $(this).addClass('shadow-lg').css('cursor', 'pointer');
      }, function(){
        $(this).removeClass('shadow-lg');
      }
    )
  });

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
          <Card.Title className="card-Title">{product.Titel}</Card.Title>
          <Card.Text>{product.Beskrivning.length > 40 ? (product.Beskrivning.substring(0, 40) + '...') : product.Beskrivning}</Card.Text>
          <Card.Text className='card-text text-secondary'>
            <span>SlutDatum: </span>
            {moment(product.SlutDatum).format('YYYY-MM-DD HH:mm:ss').toString()}
          </Card.Text>
          <Card.Footer className="text-center" id="ft">Utropspris: {product.Utropspris}</Card.Footer>
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
