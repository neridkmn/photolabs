import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = (props) => {
  const { setShowModal } =props;
  const handleOnClose = () => {setShowModal(false)}; //Declare handleOnClose function to close the modal

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" onClick={handleOnClose}/>
      </button>
    </div>
  )
};

export default PhotoDetailsModal;
