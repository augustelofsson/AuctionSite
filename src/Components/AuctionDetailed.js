import React, { useState, useEffect, useContext } from 'react';
import AddBid from './AddBid';
import BidList from './BidList';
import DeleteAuction from './DeleteAuction';
import { LoginContext } from '../contexts/loginContext';
import { BidContext } from '../contexts/BidContext';
import UpdateAuction from './UpdateAuction';
import moment from 'moment';

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
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <h3>{props.values.Titel}</h3>
      <p>{props.values.Beskrivning}</p>
      <p>Utropspris: {props.values.Utropspris}</p>
      <p>StartDatum: {moment(props.values.StartDatum).format('YYYY-MM-DD HH:mm:ss').toString()}</p>
      <p>SlutDatum: {moment(props.values.SlutDatum).format('YYYY-MM-DD HH:mm:ss').toString()}</p>
      <p>Skapad av: {props.values.SkapadAv}</p>
      {isOpen ? (
        <div>
          <p>Status: Öppen</p>
          <div>
            {username === props.SkapadAv && bids.length === 0 && (
              <>
                <DeleteAuction
                  AuktionID={props.values.AuktionID}
                  setModalOpen={props.setModalOpen}
                />

                <UpdateAuction
                  Auction={props.values}
                  setModalOpen={props.setModalOpen}
                />
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
        <BidList auktionID={props.values.AuktionID} isOpen={isOpen} />
      </div>
    </div>
  );
};

export default AuctionDetailed;
