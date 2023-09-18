import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import React, { useState } from 'react';

import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {
  const { photos, topics, setShowModal } = props; 
  const [ favPhotos, setFavPhotos ] = useState([]);

  const addToFavPhotos = (photoToAdd) => { 
    setFavPhotos([...favPhotos, photoToAdd]) // Take existing favorite photos, and add the new favorited photo to the array.
  }
  const removeFromFavPhotos = (photoToRemove) => {
    setFavPhotos(favPhotos.filter((item) => item.id !== photoToRemove.id)) // filter out the photo that was unfavorited.
  }

  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} isFavPhotoExist={favPhotos.length > 0 ? true: false}/> {/** determine if any photo is favorited and pass down to the top nagivation bar. */}
      <PhotoList photos={photos} 
      addToFavPhotos={addToFavPhotos} 
      removeFromFavPhotos={removeFromFavPhotos}
      setShowModal={setShowModal}
      />
    </div>
  );
};

export default HomeRoute;
