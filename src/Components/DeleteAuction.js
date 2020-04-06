import React, { useContext } from 'react';
import { AuctionContext } from '../contexts/auctionContext';

const DeleteAuction = ({ AuktionID, setModalOpen }) => {
  const { handleDelete } = useContext(AuctionContext);

  const handleDeleteAuktion = () => {
    handleDelete(AuktionID);
    setModalOpen(false);
  };

  return (
    <div>
      <button id="del" className='btn-danger' onClick={handleDeleteAuktion}>
        Ta bort
      </button>
    </div>
  );
};

export default DeleteAuction;
