import React, { useContext, useEffect, useState } from 'react';
import { AuctionContext } from '../contexts/auctionContext';
import { Modal } from 'react-bootstrap';
import { LoginContext } from '../contexts/loginContext';

const AuctionForm = () => {
  const { handleAdd } = useContext(AuctionContext);
  const { username } = useContext(LoginContext);
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

  const addAuction = () => {
    if (username === '') {
    }

    const obj = {
      AuktionID: 0,
      Titel: title,
      Beskrivning: description,
      StartDatum: startDate,
      SlutDatum: endDate,
      Utropspris: estimate,
      SkapadAv: username
    };
    handleAdd(obj);
    setModalOpen(false);
  };

  const ShowModal = () => {
    setModalOpen(true);
  };

  return (
    <React.Fragment>
      <button onClick={ShowModal}>Lägg till auktion</button>
      <Modal show={modalOpen} onHide={() => setModalOpen(false)}>
        {username === '' ? (
          <div>
            <p>Du måste logga in för att lägga till en ny auktion</p>
          </div>
        ) : (
          <>
            <Modal.Header closeButton>
              <Modal.Title>Lägg till en auktion</Modal.Title>
            </Modal.Header>
            <form>
              <div>
                <input
                  type='text'
                  name='titel'
                  placeholder='Titel'
                  value={title}
                  onChange={UpdateTitle}
                />
              </div>
              <div>
                <input
                  type='text'
                  name='beskrivning'
                  placeholder='Beskrivning'
                  value={description}
                  onChange={UpdateDescription}
                />
              </div>
              <div>
                <input
                  type='text'
                  name='StartDatum'
                  value={startDate}
                  placeholder='Startdatum'
                  onChange={UpdateStartdate}
                />
              </div>
              <div>
                <input
                  type='text'
                  name='SlutDatum'
                  value={endDate}
                  placeholder='Slutdatum'
                  onChange={UpdateEnddate}
                />
              </div>
              <div>
                <input
                  type='text'
                  name='Utropspris'
                  value={estimate}
                  placeholder='Utropspris'
                  onChange={UpdateEstimate}
                />
              </div>
              <Modal.Footer>
                <button
                  variant='primary'
                  onClick={() => {
                    addAuction();
                  }}
                >
                  Lägg till
                </button>
              </Modal.Footer>
            </form>
          </>
        )}
      </Modal>
    </React.Fragment>
  );
};

export default AuctionForm;
