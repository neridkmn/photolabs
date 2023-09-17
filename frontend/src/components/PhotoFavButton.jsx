import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {

  const [selected, setSelected] = useState(false); //Create selected state (Boolean)

  const handleOnClick = () => { // function to toggle selected state
    setSelected(!selected);
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