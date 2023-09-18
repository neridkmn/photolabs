import React, { useState } from 'react';
import HomeRoute from 'routes/HomeRoute';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

import './App.scss';
 


// Note: Rendering a single component to build components in isolation
const App = () => {

    const [showModal, setShowModal] = useState(false); //Create a state to determine to show the modal or not. 

    return (
    <div className="App">
     <HomeRoute photos={photos} topics={topics} />
     {showModal && <PhotoDetailsModal />} {/**conditional rendering to show modal */}
    </div>
  );
};

export default App;
