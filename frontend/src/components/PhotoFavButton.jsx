import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {

  const { addToFavPhotos, removeFromFavPhotos, photo, favPhotos } = props; // get the photo object from the parent.


  // const [selected, setSelected] = useState(favPhotos.includes(photo)); //Create selected state (Boolean)

  const selected = favPhotos.includes(photo);


  // const selected = favPhotos.includes(photo);

  const handleOnClick = () => { // function to toggle selected state

    if (selected) {
      removeFromFavPhotos(photo); // if the selected state is true, that means the photo was already favorited before clicking, and therefore neeeds to be removed from favorites
    } else {
      addToFavPhotos(photo); // if the selected state is false, the photo has not been favorited yet. therefore, add the photo to the favorited photos.
    }
    
  };

  //Add selected as a prop to FavIcon component and onClick to its div tag.
  return (
    <div className="photo-list__fav-icon" onClick={handleOnClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={selected}/> 
      </div>
    </div>
  );
}

export default PhotoFavButton;