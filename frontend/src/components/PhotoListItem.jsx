import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {

  const { location, imageSource, username, profile, addToFavPhotos, removeFromFavPhotos } = props; 

  return(
    <div className="photo-list__item">
      <PhotoFavButton 
        addToFavPhotos={addToFavPhotos} 
        removeFromFavPhotos={removeFromFavPhotos} 
      />
      <img className="photo-list__image" src={imageSource} />
      <div className="photo-list__user-details">
       <img className="photo-list__user-profile" src={profile} />
       <div className="photo-list__user-info">
        <div>{username}</div>
        <div className="photo-list__user-location">{location.city}, {location.country}</div>
       </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
