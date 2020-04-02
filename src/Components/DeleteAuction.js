import React, { useContext } from 'react';
import { AuctionContext } from '../contexts/auctionContext';

const DeleteAuction = ({ AuktionID, setModalOpen }) => {
  const { handleDelete, handleGetList } = useContext(AuctionContext);

  const handleDeleteAuktion = () => {
    handleDelete(AuktionID);
    setModalOpen(false);
  };

  return (
    <div>
      <button className='btn-danger' onClick={handleDeleteAuktion}>
        Ta bort auktion
      </button>
    </div>
  );
};

export default DeleteAuction;
