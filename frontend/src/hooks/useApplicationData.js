import React, { useState } from 'react';
import photos from 'mocks/photos';
import topics from 'mocks/topics';

const useApplicationData = () => {
  const [showModal, setShowModal] = useState(false); //Create a state to determine to show the modal or not. 
  const [selectedPhoto, setSelectedPhoto] = useState({}); //Create a state to show selected photo details in the console. 

  const [favPhotos, setFavPhotos] = useState([]);

  const addToFavPhotos = (photoToAdd) => {
    setFavPhotos([...favPhotos, photoToAdd]); // Take existing favorite photos, and add the new favorited photo to the array.
  };
  const removeFromFavPhotos = (photoToRemove) => {
    setFavPhotos(favPhotos.filter((item) => item.id !== photoToRemove.id)); // filter out the photo that was unfavorited.
  };


return {
  photos,
  topics,
  showModal,
  setShowModal,
  selectedPhoto,
  setSelectedPhoto,
  addToFavPhotos,
  removeFromFavPhotos,
  favPhotos
}

};

export default useApplicationData;

