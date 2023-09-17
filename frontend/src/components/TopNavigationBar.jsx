import React from 'react';
import TopicList from './TopicList';

import '../styles/TopNavigationBar.scss'
import FavBadge from './FavBadge';

const TopNavigation = (props) => {
  const { topics } = props;
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <div style={{
        marginRight: "24px", 
        display: "flex",
        alignItems: "center"
        }}>
          <TopicList topics={topics}/> 
          <FavBadge isFavPhotoExist={true}/>
      </div>
    </div>
  )
}

export default TopNavigation;