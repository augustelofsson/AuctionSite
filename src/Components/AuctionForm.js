import React, { useContext, useEffect, useState } from 'react';
import { AuctionContext } from '../contexts/auctionContext';
import { Modal } from 'react-bootstrap';

const AuctionForm = () => {
  const { handleAdd } = useContext(AuctionContext);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStarDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [estimate, setEstimate] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  const UpdateTitle = e => {
    setTitle(e.target.value);
  };
  const UpdateDescription = e => {
    setDescription(e.target.value);
  };
  const UpdateStartdate = e => {
    setStarDate(e.target.value);
  };
  const UpdateEnddate = e => {
    setEndDate(e.target.value);
  };
  const UpdateEstimate = e => {
    setEstimate(e.target.value);
  };
  const addAuction = e => {
    e.preventDefault();

    const obj = {
      AuktionID: 0,
      Titel: title,
      Beskrivning: description,
      StartDatum: startDate,
      SlutDatum: endDate,
      Utropspris: estimate,
      SkapadAv: 'Asma Rizwan'
    };
    handleAdd(obj);
  };

  return (
    <React.Fragment>
      <button onClick={() => setModalOpen(true)}>Lägg till auktion</button>
      <Modal Show={modalOpen} onHide={() => setModalOpen(false)}>
        <div>
          <label>Titel</label>
          <input
            type='text'
            name='titel'
            value={title}
            onChange={UpdateTitle}
          />
          <label>Beskrivning</label>
          <input
            type='text'
            name='beskrivning'
            value={description}
            onChange={UpdateDescription}
          />
          <label>Start datum</label>
          <input
            type='text'
            name='StartDatum'
            value={startDate}
            onChange={UpdateStartdate}
          />
          <label>Slut datum</label>
          <input
            type='text'
            name='SlutDatum'
            value={endDate}
            onChange={UpdateEnddate}
          />
          <label>Utropspris</label>
          <input
            type='text'
            name='Utropspris'
            value={estimate}
            onChange={UpdateEstimate}
          />
          <button onClick={addAuction}>Submit</button>
        </div>
      </Modal>
    </React.Fragment>
  );
};

export default AuctionForm;
