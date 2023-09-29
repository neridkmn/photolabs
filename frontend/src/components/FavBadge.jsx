import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = (props) => {

  const { isFavPhotoExist,toggleShowFavPhotos } = props;

  const handleOnClick = () => {
    toggleShowFavPhotos(true);
  }

  return (
    <div className='fav-badge' onClick={handleOnClick}>
      <FavIcon displayAlert={!!isFavPhotoExist} selected={!!isFavPhotoExist} /> {/** use isFavPhotoExist as a condition to set the selected state for the FavIcon component */}
    </div>
  );
};

export default FavBadge;