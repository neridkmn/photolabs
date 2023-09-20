import React from 'react';

import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';

import PhotoFavButton from 'components/PhotoFavButton';
import PhotoList from 'components/PhotoList';

const PhotoDetailsModal = (props) => {
  const { setShowModal, selectedPhoto, addToFavPhotos, removeFromFavPhotos, favPhotos } = props;
  const handleOnClose = () => { setShowModal(false); }; //Declare handleOnClose function to close the modal

  return (
    <div className="photo-details-modal">

      <button className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" onClick={handleOnClose} />
      </button>
      <div className='photo-details-modal__images'>
        {/* <PhotoFavButton 
        addToFavPhotos={addToFavPhotos} 
        removeFromFavPhotos={removeFromFavPhotos} 
        photo={selectedPhoto} // pass down the photo object as prop
        favPhotos={favPhotos}
      /> */}


        <img className="photo-details-modal__image" src={selectedPhoto.urls.full} />


        <div className='photo-details-modal__photographer-details'>
          <img className='photo-details-modal__photographer-profile' src={selectedPhoto.user.profile} />
          <div className='photo-details-modal__photographer-info' >
            {selectedPhoto.user.name}
         
          <div className='photo-details-modal__photographer-location'>
            {selectedPhoto.location.city}, {selectedPhoto.location.country}
          </div>
          </div>
        </div>
        <div className='photo-details-modal__header'>Similar Photos</div>
        <div className='photo-details-modal__images'>
        {<PhotoList favPhotos={[]} photos={Object.values(selectedPhoto.similar_photos)}/>}

        </div>
      </div>

    </div>
  );
};

export default PhotoDetailsModal;
