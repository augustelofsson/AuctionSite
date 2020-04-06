import React, { useContext, useState } from 'react';
import { AuctionContext } from '../contexts/auctionContext';
import { Modal } from 'react-bootstrap';
import { LoginContext } from '../contexts/loginContext';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';

const AuctionForm = () => {
  const { handleAdd } = useContext(AuctionContext);
  const { username } = useContext(LoginContext);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [endDate, setEndDate] = useState(new Date());
  const [estimate, setEstimate] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [minTime, setMinTime] = useState(new Date());

  const UpdateTitle = e => {
    setTitle(e.target.value);
  };

  const UpdateDescription = e => {
    setDescription(e.target.value);
  };

  const UpdateEnddate = async (date) => {
    let min = await calculateTime(date)
    setMinTime(min);
    setEndDate(date);
  };

  const UpdateEstimate = e => {
    setEstimate(e.target.value);
  };

  const addAuction = () => {
    const obj = {
      AuktionID: 0,
      Titel: title,
      Beskrivning: description,
      StartDatum: new Date(),
      SlutDatum: endDate,
      Utropspris: estimate,
      SkapadAv: username
    };

    if (title !== '' && description !== '' && estimate !== '') {
      handleAdd(obj);
      setModalOpen(false);
      setTitle('');
      setDescription('');
      setEstimate('');
    }

  };

  const ShowModal = async () => {
    let min = await calculateTime(new Date());
    setEndDate(min);

    setModalOpen(true);
  };

  const calculateTime = async (date) => {
    let isToday = moment(date).isSame(moment(), 'day');
    if (isToday) {
        return moment(Math['ceil']((+ moment()) / (+ moment.duration(15, 'minutes'))) * (+ moment.duration(15, 'minutes'))).toDate();
    }
    return moment().startOf('day').toDate();
  }

  return (
    <React.Fragment>
      <button id="add" onClick={ShowModal}>Lägg till auktion</button>
      <Modal id="formModal" show={modalOpen} onHide={() => setModalOpen(false)}>
        {username === '' ? (
          <div className='alert-wrapper'>
            <p id="alert">Du måste logga in för att lägga till en ny auktion</p>
          </div>
        ) : (
          <>
            <Modal.Header id="header" closeButton>
              <Modal.Title>Lägg till en auktion</Modal.Title>
            </Modal.Header>
            <form onSubmit={e => e.preventDefault()} id='auction-form'>
              <div>
                <label>Titel</label><br></br>
                <input  
                  required
                  type='text'
                  name='titel'
                  placeholder='Titel'
                  value={title}
                  onChange={UpdateTitle}
                />
              </div>
              <div>
              <label >Beskrivning</label><br></br>
                <textarea
                  required
                  rows="4"
                  cols="35"
                  type='text'
                  name='beskrivning'
                  placeholder='Beskrivning'
                  value={description}
                  onChange={UpdateDescription}
                />
              </div>
              <div>
              <label>Slutdatum</label><br></br>
              <DatePicker placeholderText='Slutdatum'
                  selected={endDate}
                  onChange={date => UpdateEnddate(date)}
                  minDate={new Date()}
                  minTime={minTime}
                  maxTime={moment().endOf('day').toDate()} // set to 23:59 pm today
                  isClearable
                  showTimeSelect
                  timeFormat='HH:mm'
                  timeIntervals={15}
                  timeCaption='Klockslag'
                  dateFormat='yyyy-MM-dd HH:mm'>
              </DatePicker>
              </div>
              <div>
              <label>Utropspris</label><br></br>
                <input
                  required
                  type='text'
                  name='Utropspris'
                  value={estimate}
                  placeholder='Utropspris'
                  onChange={UpdateEstimate}
                />
              </div>
              <Modal.Footer id="foo">
                <button id="button"
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
