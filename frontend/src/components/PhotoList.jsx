import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";


const PhotoList = (props) => {
  const { photos, addToFavPhotos, removeFromFavPhotos } = props;

  return (
    <ul className="photo-list">
      {photos.map((item) => {
        return <PhotoListItem 
            key={item.id} 
            location={item.location}
            imageSource={item.urls.regular}
            username={item.user.name}
            profile={item.user.profile}
            addToFavPhotos={addToFavPhotos} 
            removeFromFavPhotos={removeFromFavPhotos}
          />
      })}
    </ul>
  );
};

export default PhotoList;
