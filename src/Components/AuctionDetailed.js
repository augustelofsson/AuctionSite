import React, { useState, useEffect, useContext } from 'react';
import AddBid from './AddBid';
import BidList from './BidList';
import DeleteAuction from './DeleteAuction';
import { LoginContext } from '../contexts/loginContext';
import { BidContext } from '../contexts/BidContext';
import UpdateAuction from './UpdateAuction';

const AuctionDetailed = props => {
  const date = Date.now();
  const [isOpen, setIsOpen] = useState(true);
  const { username } = useContext(LoginContext);
  const { bids } = useContext(BidContext);

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
      <p>Skapad av: {props.values.SkapadAv}</p>
      {isOpen ? (
        <div>
          <p>Status: Öppen</p>
          <div>
            {username === props.SkapadAv && bids.length === 0 && (
              <>
                <DeleteAuction
                  AuktionID={props.values.AuktionID}
                  setModalOpen={props.setModalOpen} />

                <UpdateAuction
                  Auction={props.values}
                  setModalOpen={props.setModalOpen} />
              </>
            )}
             
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
