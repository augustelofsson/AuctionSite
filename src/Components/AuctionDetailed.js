import React, { useState, useEffect } from 'react';
import AddBid from './AddBid';
import BidList from './BidList';
import DeleteAuction from './DeleteAuction';

const AuctionDetailed = props => {
  const date = Date.now();
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const auctionEndDate = Date.parse(props.values.SlutDatum);
    if (date < auctionEndDate) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, []);

  return (
    <div>
      <h3>{props.values.Titel}</h3>
      <p>{props.values.Beskrivning}</p>
      <p>Utropspris: {props.values.Utropspris}</p>
      <p>StartDatum: {props.values.StartDatum}</p>
      <p>SlutDatum: {props.values.SlutDatum}</p>
      {isOpen ? (
        <div>
          <p>Status: Öppen</p>
          <div>
            <DeleteAuction
              AuktionID={props.values.AuktionID}
              setModalOpen={props.setModalOpen}
            />
            <AddBid value={props.values} />
          </div>
        </div>
      ) : (
        <div>
          <p>Status: Avslutad</p>
        </div>
      )}
      <div>
        <BidList auktionID={props.values.AuktionID} />
      </div>
    </div>
  );
};

export default AuctionDetailed;
