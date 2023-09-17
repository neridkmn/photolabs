import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import React, { useState } from 'react';

import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {
  const { photos, topics } = props; 
  const [ favPhotos, setFavPhotos ] = useState([]);

  return (
    <div className="home-route">
      <TopNavigationBar topics={topics}/>
      <PhotoList photos={photos}/>
    </div>
  );
};

export default HomeRoute;
