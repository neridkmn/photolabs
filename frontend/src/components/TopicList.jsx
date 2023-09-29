import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = (props) => {

  const { topics, setPhotosByTopic, toggleShowFavPhotos } = props;

  return (
    <div className="top-nav-bar__topic-list">
      {topics.map((item) => {
        return <TopicListItem
          key={item.id}
          item={item} /** Instead of passing down individual properties of a topic, pass down the entire topic object */
          setPhotosByTopic={setPhotosByTopic} /** Pass down the setPhotosByTopic function to the child component */
          toggleShowFavPhotos={toggleShowFavPhotos}
        />;
      })}
    </div>
  );
};

export default TopicList;
