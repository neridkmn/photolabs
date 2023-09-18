import React from 'react';
import HomeRoute from 'routes/HomeRoute';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

import './App.scss';
 


// Note: Rendering a single component to build components in isolation
const App = () => {


    return (
    <div className="App">
     <HomeRoute photos={photos} topics={topics} />
     <PhotoDetailsModal />
    </div>
  );
};

export default App;
