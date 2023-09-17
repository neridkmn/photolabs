import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import React from 'react';

import '../styles/HomeRoute.scss';

const HomeRoute = () => {
  return (
    <div className="home-route">
      <TopNavigationBar />
      <PhotoList />
    </div>
  );
};

export default HomeRoute;
