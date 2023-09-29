import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import React, { useState } from 'react';

import '../styles/HomeRoute.scss';
import FavPhotosRoute from './FavPhotosRoute';

const HomeRoute = (props) => {
  const { photos, topics, setShowModal, setSelectedPhoto, favPhotos, addToFavPhotos, removeFromFavPhotos, setPhotosByTopic, showFavPhotos, toggleShowFavPhotos } = props;

  return (
    <div className="home-route">
      <TopNavigationBar
        setPhotosByTopic={setPhotosByTopic} // Pass down the setPhotosByTopic function to the child component
        topics={topics}
        toggleShowFavPhotos={toggleShowFavPhotos}
        isFavPhotoExist={favPhotos.length > 0 ? true : false} /> {/** determine if any photo is favorited and pass down to the top nagivation bar. */}
      {showFavPhotos ? (
        <FavPhotosRoute 
        addToFavPhotos={addToFavPhotos}
        removeFromFavPhotos={removeFromFavPhotos}
        setShowModal={setShowModal}
        setSelectedPhoto={setSelectedPhoto}
        favPhotos={favPhotos}/>
      ) : (
        <PhotoList photos={photos}
          addToFavPhotos={addToFavPhotos}
          removeFromFavPhotos={removeFromFavPhotos}
          setShowModal={setShowModal}
          setSelectedPhoto={setSelectedPhoto}
          favPhotos={favPhotos}
        />
      )}
    </div>
  );
};

export default HomeRoute;
