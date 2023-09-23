import { useReducer, useEffect } from 'react';
import topics from 'mocks/topics';


const ACTIONS = {
  SHOW_MODAL: 'SHOW_MODAL',
  SET_SELECTED_PHOTO: 'SET_SELECTED_PHOTO',
  ADD_TO_FAV_PHOTOS: 'ADD_TO_FAV_PHOTOS',
  REMOVE_FROM_FAV_PHOTOS: 'REMOVE_FROM_FAV_PHOTOS',
  FETCH_PHOTOS: "FETCH_PHOTOS",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.FETCH_PHOTOS:
      return {
        ...state,
        photoData: action.payload // Set the data that was retrieved from the API to photoData inside the state.
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
  });

  // Getting data from the server
  useEffect(() => {
    fetch('/api/photos')
      .then(res => res.json())
      .then(data => dispatch({ type: ACTIONS.FETCH_PHOTOS, payload: data })); // Use dispatch to set the photoData in the state.
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

  const data = { // Re-add mock data because otherwise the app crashes as App.js expects mock data from this function to pass down to components.
    topics
  };

  return {
    state,
    data,
    setShowModal,
    setSelectedPhoto,
    addToFavPhotos,
    removeFromFavPhotos,
  };
};

export default useApplicationData;

