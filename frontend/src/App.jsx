import React, { useState } from 'react';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';
import './App.scss';
 


// Note: Rendering a single component to build components in isolation
const App = () => {
  const {
    photos,
    topics,
    showModal,
    setShowModal,
    selectedPhoto,
    setSelectedPhoto,
    addToFavPhotos,
    removeFromFavPhotos,
    favPhotos
  } = useApplicationData();
  

    return (
    <div className="App">
     <HomeRoute 
      photos={photos} 
      topics={topics} 
      setShowModal={setShowModal} 
      setSelectedPhoto={setSelectedPhoto} 
      addToFavPhotos={addToFavPhotos}
      removeFromFavPhotos={removeFromFavPhotos}
      favPhotos={favPhotos}
      />
     {showModal && 
     <PhotoDetailsModal 
      addToFavPhotos={addToFavPhotos} 
      removeFromFavPhotos={removeFromFavPhotos} 
      setShowModal={setShowModal} 
      selectedPhoto={selectedPhoto}
      favPhotos={favPhotos}
      />} 
    </div>
  );
};

export default App;
