import React, { useContext, useState } from 'react';
import { AuctionContext } from '../contexts/auctionContext';
import { Modal } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';

const UpdateAuction = ({ Auction }) => {
  const {handleUpdate} = useContext(AuctionContext);
  const [title, setTitle] = useState(Auction.Titel);
  const [description, setDescription] = useState(Auction.Beskrivning);
  const [endDate, setEndDate] = useState(new Date(Auction.SlutDatum));
  const [estimate, setEstimate] = useState(Auction.Utropspris);
  const [modalOpen, setModalOpen] = useState(false);
  const [minTime, setMinTime] = useState(new Date(moment().startOf('day').toDate()));
 
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

  const ShowModal = async () => {
    let min = await calculateTime(Auction.SlutDatum);
    setMinTime(min);
    setModalOpen(true);
  }

  const calculateTime = async (date) => {
    let isToday = moment(date).isSame(moment(Auction.StartDatum), 'day');
    if (isToday) {
        return moment(Math['ceil']((+ moment()) / (+ moment.duration(15, 'minutes'))) * (+ moment.duration(15, 'minutes'))).toDate();
    }
    return moment().startOf('day').toDate();
  }

  const handleUpdateAuction = () => {
    let auction = Auction;
    auction.Beskrivning = description;
    auction.SlutDatum = endDate;
    auction.Titel = title;
    auction.Utropspris = estimate;

    if (title !== '' && description !== '' && estimate !== '') {
      handleUpdate(auction);
      setModalOpen(false);
    }
  };


  return (
    <>
    <button id="update" onClick={ShowModal}>Uppdatera</button>
    <Modal id="formModal" show={modalOpen} onHide={() => setModalOpen(false)}>
      <Modal.Header  id="header" closeButton>
        <Modal.Title>Uppdatera auktion</Modal.Title>
      </Modal.Header>
      <form onSubmit={(e) => e.preventDefault()}>
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
          <input
          required
          type='text'
          name='beskrivning'
          placeholder='Beskrivning'
          value={description}
          onChange={UpdateDescription}
          />
        </div>
        <div>
        <label>Slutdatum</label><br></br>
            <DatePicker 
                placeholderText='Slutdatum'
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
        <Modal.Footer>
          <button id="button"
            variant='primary'
            onClick={() => {
              handleUpdateAuction();
            }}
          >
            Uppdatera
          </button>
        </Modal.Footer>
      </form>
      </Modal>
    </>
  );
};

export default UpdateAuction;
