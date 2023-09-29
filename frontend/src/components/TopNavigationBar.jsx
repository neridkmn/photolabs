import React from 'react';
import TopicList from './TopicList';

import '../styles/TopNavigationBar.scss';
import FavBadge from './FavBadge';

const TopNavigation = (props) => {
  const { topics, isFavPhotoExist, setPhotosByTopic, toggleShowFavPhotos } = props;
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} setPhotosByTopic={setPhotosByTopic} toggleShowFavPhotos={toggleShowFavPhotos} /> {/** Pass down the setPhotosByTopic function to the child component */}
      <FavBadge toggleShowFavPhotos={toggleShowFavPhotos} isFavPhotoExist={isFavPhotoExist} /> {/** pass down isFavPhotoExist to the FavBadge */}
    </div>
  );
};

export default TopNavigation;