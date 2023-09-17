import React from 'react';

import PhotoList from 'components/PhotoList';
import './App.scss';
import TopicList from 'components/TopicList';


// Note: Rendering a single component to build components in isolation
const App = () => {

  // const photos = new Array(3); // creating an empty array

  // const photosLength = photos.length; // for loop didn't work with photos.length, so I assigned it to a new variable. 

  // for (let i = 0; i < photosLength; i++) {
  //   photos.push(sampleDataForPhotoListItem);
  // }

    return (
    <div className="App">
      {/* {photos.map((photo, index) => //Instead of creating 3 copies of the same component, I'm looping through the data and render a component for each element.
        <PhotoListItem
          key={index} //assign a key using index from the .map method
          location={photo.location}
          imageSource={photo.imageSource}
          username={photo.username}
          profile={photo.profile}
        />
      )} */}
      <TopicList />
      <PhotoList />
    </div>
  );
};

export default App;
