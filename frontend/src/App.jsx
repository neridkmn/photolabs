import React, { useState } from 'react';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';
import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const {
    state,
    setShowModal,
    setSelectedPhoto,
    addToFavPhotos,
    removeFromFavPhotos,
  } = useApplicationData();
  

    return (
    <div className="App">
     <HomeRoute 
      photos={state.photoData} /** Instead of getting the photod from the mock data, App.jsx now gets the photoData from the application state */
      topics={state.topicData} /**App.jsx now uses the topic data from the state instead of the mock data */
      setShowModal={setShowModal} 
      setSelectedPhoto={setSelectedPhoto} 
      addToFavPhotos={addToFavPhotos}
      removeFromFavPhotos={removeFromFavPhotos}
      favPhotos={state.favPhotos}
      />
     {state.showModal && 
     <PhotoDetailsModal 
      addToFavPhotos={addToFavPhotos} 
      removeFromFavPhotos={removeFromFavPhotos} 
      setShowModal={setShowModal} 
      selectedPhoto={state.selectedPhoto}
      favPhotos={state.favPhotos}
      />} 
    </div>
  );
};

export default App;
