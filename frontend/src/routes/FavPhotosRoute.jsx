import PhotoList from "components/PhotoList";
import React from "react";

const FavPhotosRoute = (props) => {

  const { favPhotos, addToFavPhotos, removeFromFavPhotos, setShowModal, setSelectedPhoto } = props;


  return (
    favPhotos.length === 0 ? (
      <div>Please like some photos.</div>
    ) : (
      <PhotoList photos={favPhotos}
          addToFavPhotos={addToFavPhotos}
          removeFromFavPhotos={removeFromFavPhotos}
          setShowModal={setShowModal}
          setSelectedPhoto={setSelectedPhoto}
          favPhotos={favPhotos}
        />
    )
  );

};

export default FavPhotosRoute;