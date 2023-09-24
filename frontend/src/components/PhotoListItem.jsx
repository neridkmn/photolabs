import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {

  const { photo, addToFavPhotos, removeFromFavPhotos, setShowModal, setSelectedPhoto, favPhotos } = props;
  const handleOnClick = () => {
    setSelectedPhoto(photo);
    setShowModal(true);
  };

  return (
    <div className="photo-list__item">
      <PhotoFavButton
        addToFavPhotos={addToFavPhotos}
        removeFromFavPhotos={removeFromFavPhotos}
        photo={photo} // pass down the photo object as prop
        favPhotos={favPhotos}
      />
      <img className="photo-list__image" src={photo.urls.regular} onClick={handleOnClick} /> {/** use photo object's fields */}
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={photo.user.profile} /> {/** use photo object's fields */}
        <div className="photo-list__user-info">
          <div>{photo.user.name}</div> {/** use photo object's fields */}
          <div className="photo-list__user-location">{photo.location.city}, {photo.location.country}</div> {/** use photo object's fields */}
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
