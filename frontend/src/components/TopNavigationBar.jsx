import React from 'react';
import TopicList from './TopicList';

import '../styles/TopNavigationBar.scss';
import FavBadge from './FavBadge';

const TopNavigation = (props) => {
  const { topics, isFavPhotoExist, setPhotosByTopic } = props;
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} setPhotosByTopic={setPhotosByTopic} /> {/** Pass down the setPhotosByTopic function to the child component */}
      <FavBadge isFavPhotoExist={isFavPhotoExist} /> {/** pass down isFavPhotoExist to the FavBadge */}
    </div>
  );
};

export default TopNavigation;