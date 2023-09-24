import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";


const PhotoList = (props) => {
  const { photos, addToFavPhotos, removeFromFavPhotos, setShowModal, setSelectedPhoto, favPhotos } = props;

  return (
    <ul className="photo-list">
      {photos.map((item) => {
        return <PhotoListItem
          key={item.id}
          photo={item} // pass down the entire photo object as a prop
          addToFavPhotos={addToFavPhotos}
          removeFromFavPhotos={removeFromFavPhotos}
          setShowModal={setShowModal}
          setSelectedPhoto={setSelectedPhoto}
          favPhotos={favPhotos}
        />;
      })}
    </ul>
  );
};

export default PhotoList;
