import React, { useContext, useEffect, useState } from 'react';
import { AuctionContext } from '../contexts/auctionContext';
import { Modal } from 'react-bootstrap';
import { LoginContext } from '../contexts/loginContext';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const AuctionForm = () => {
  const { handleAdd } = useContext(AuctionContext);
  const { username } = useContext(LoginContext);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStarDate] = useState();
  const [endDate, setEndDate] = useState('');
  const [estimate, setEstimate] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  const UpdateTitle = e => {
      console.log(startDate)
    setTitle(e.target.value);
  };
  const UpdateDescription = e => {
    setDescription(e.target.value);
  };
  const UpdateStartdate = date => {
    setStarDate(date);
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
            <form onSubmit={e => e.preventDefault()}>
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
              <DatePicker placeholderText='Startdatum'
                  selected={startDate}
                  onChange={date => UpdateStartdate(date)}
                  minDate={new Date()}
                  isClearable
                  showTimeSelect
                  timeFormat='HH:mm'
                  timeIntervals={15}
                  timeCaption='Klockslag'
                  dateFormat='yyyy-MM-dd HH:mm'>  
              </DatePicker>
              </div>
              <div>
              <DatePicker placeholderText='Slutdatum'
                  selected={endDate}
                  onChange={date => setEndDate(date)}
                  minDate={new Date()}
                  isClearable
                  showTimeSelect
                  timeFormat='HH:mm'
                  timeIntervals={15}
                  timeCaption='Klockslag'
                  dateFormat='yyyy-MM-dd HH:mm'>
              </DatePicker>
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
