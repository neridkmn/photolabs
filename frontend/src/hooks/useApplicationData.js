import { useReducer, useEffect } from 'react';


const ACTIONS = {
  SHOW_MODAL: 'SHOW_MODAL',
  SET_SELECTED_PHOTO: 'SET_SELECTED_PHOTO',
  ADD_TO_FAV_PHOTOS: 'ADD_TO_FAV_PHOTOS',
  REMOVE_FROM_FAV_PHOTOS: 'REMOVE_FROM_FAV_PHOTOS',
  SET_PHOTO_DATA: "SET_PHOTO_DATA",
  SET_TOPIC_DATA: "SET_TOPIC_DATA",
  SET_PHOTOS_BY_TOPIC: 'SET_PHOTOS_BY_TOPIC',
  TOGGLE_SHOW_FAV_PHOTOS: 'TOGGLE_SHOW_FAV_PHOTOS',
};


function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.SET_PHOTO_DATA:
      return {
        ...state,
        photoData: action.payload // Set the data that was retrieved from the API to photoData inside the state.
      };
    case ACTIONS.SET_TOPIC_DATA: // Set the data that was retrieved from the API to topicData inside the state.
      return {
        ...state,
        topicData: action.payload
      };
    case ACTIONS.SET_PHOTOS_BY_TOPIC: // Set the photoData based on the topic selected by the user
      return {
        ...state,
        photoData: action.payload
      };
    case ACTIONS.SHOW_MODAL:
      return {
        ...state,
        showModal: action.payload
      };
    case ACTIONS.SET_SELECTED_PHOTO:
      return {
        ...state,
        selectedPhoto: action.payload
      };
    case ACTIONS.ADD_TO_FAV_PHOTOS:
      return {
        ...state,
        favPhotos: [...state.favPhotos, action.payload]
      };
    case ACTIONS.REMOVE_FROM_FAV_PHOTOS:
      return {
        ...state,
        favPhotos: state.favPhotos.filter((item) => item.id !== action.payload.id)
      };
    case ACTIONS.TOGGLE_SHOW_FAV_PHOTOS:
      return {
        ...state,
        showFavPhotos: action.payload
      };
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}

const useApplicationData = () => {

  // Setting initial state
  const [state, dispatch] = useReducer(reducer, {
    photoData: [],
    topicData: [],
    showModal: false,
    selectedPhoto: {},
    favPhotos: [],
    showFavPhotos: false,
  });

  // Getting data from the server
  useEffect(() => {
    fetch('/api/photos')
      .then(res => res.json())
      .then(data => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data })); // Use dispatch to set the photoData in the state.
  }, []);

  useEffect(() => {
    fetch('/api/topics')
      .then(res => res.json())
      .then(data => dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data })); // Use dispatch to set the topicData in the state.
  }, []);

  // Dispatch functions
  const setShowModal = (payload) => {
    dispatch({ type: ACTIONS.SHOW_MODAL, payload: payload });
  };

  const setSelectedPhoto = (photo) => {
    dispatch({ type: ACTIONS.SET_SELECTED_PHOTO, payload: photo });
  };

  const addToFavPhotos = (photo) => {
    dispatch({ type: ACTIONS.ADD_TO_FAV_PHOTOS, payload: photo });
  };

  const removeFromFavPhotos = (photo) => {
    dispatch({ type: ACTIONS.REMOVE_FROM_FAV_PHOTOS, payload: photo });
  };

  const setPhotosByTopic = (topicId) => { // Retrieve the photos based on a specified topic id, and dispatch it to reducer to use the data as the new photoData
    fetch(`/api/topics/photos/${topicId}`)
      .then(res => res.json())
      .then(data => dispatch({ type: ACTIONS.SET_PHOTOS_BY_TOPIC, payload: data }));
  };

  const toggleShowFavPhotos = (toggleTo) => {
    dispatch ({type: ACTIONS.TOGGLE_SHOW_FAV_PHOTOS, payload: toggleTo});
  };


  return {
    state,
    setShowModal,
    setSelectedPhoto,
    addToFavPhotos,
    removeFromFavPhotos,
    setPhotosByTopic,
    toggleShowFavPhotos,
  };
};

export default useApplicationData;

