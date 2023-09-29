import React from "react";

import "../styles/TopicListItem.scss";

const sampleDataForTopicListItem = {
  id: "1",
  slug: "topic-1",
  label: "Nature",
};

const TopicListItem = (props) => {

  const { item, setPhotosByTopic, toggleShowFavPhotos } = props; // Destructing props.

  const handleOnClick = () => { // When clicked, calls the setPhotosByTopic function with the current topic id, which should result in a fetch request in the useApplicationData, and photos related to the current topic should be retrieved.
    setPhotosByTopic(item.id);
    toggleShowFavPhotos(false);
  };

  return (
    <div className="topic-list__item" onClick={handleOnClick}>
      <span>{item.title}</span>
    </div>
  );
};

export default TopicListItem;
