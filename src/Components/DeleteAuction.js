import React, { useContext } from 'react';
import { AuctionContext } from '../contexts/auctionContext';

const DeleteAuction = ({ AuktionID }) => {
  const { handleDelete } = useContext(AuctionContext);

  const handleDeleteAuktion = () => {
    handleDelete(AuktionID);
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
