import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import React, { useState } from 'react';

import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {
  const { photos, topics } = props; 
  const [ favPhotos, setFavPhotos ] = useState([]);

  const addToFavPhotos = (photoToAdd) => { 
    setFavPhotos([...favPhotos, photoToAdd]) // Take existing favorite photos, and add the new favorited photo to the array.
  }
  const removeFromFavPhotos = (photoToRemove) => {
    setFavPhotos(photos.filter((item) => item.id !== photoToRemove.id)) // filter out the photo that was unfavorited.
  }

  return (
    <div className="home-route">
      <TopNavigationBar topics={topics}/>
      <PhotoList photos={photos} addToFavPhotos={addToFavPhotos} removeFromFavPhotos={removeFromFavPhotos}/>
    </div>
  );
};

export default HomeRoute;
