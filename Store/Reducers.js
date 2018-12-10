import {
  SET_TOKEN,
  SET_ERROR,
  SET_PLAYLIST,
  SET_CURRENT_SONG,
  FETCH_PLAYLIST_ASYNC,
  ENABLE_REFRESH_BUTTON,
  DISABLE_REFRESH_BUTTON,
  FETCH_PLAYLIST_ASYNC_END
} from './ActionTypes';


const refreshButtonEnabled = (state = false, action) => {
    switch (action.type) {
      case ENABLE_REFRESH_BUTTON:
        return true;
      case DISABLE_REFRESH_BUTTON:
        return false;
      default:
        return state;

    }
};

const isPlaylistFetching = (state = false, action) => {
  switch(action.type){
    case FETCH_PLAYLIST_ASYNC:
      return true;
    case FETCH_PLAYLIST_ASYNC_END:
      return false;
    default:
      return state;
  }
};

const token = (state = 'none', action) => {
  switch (action.type) {
    case SET_TOKEN:
      return action.token;
    default:
      return state;
  }
};

const fetchError =
  (state = {errorStatus:'---', errorMessage:'---'}, action) => {
    switch (action.type) {
      case SET_ERROR:
        return {
          errorStatus: action.errorStatus,
          errorMessage: action.errorMessage
        };
        break;
      default:
        return state;
      }
    };

const playlist = (state = [], action) => {
  switch(action.type){
    case SET_PLAYLIST:
      return action.playlist;
    default:
      return state;
  }
};

const currentSong = (state = {}, action) => {
  switch (action.type) {
    case SET_CURRENT_SONG:
      return action.song;
    default:
      return state;
  }
};

export default {
  playlist,
  fetchError,
  currentSong,
  isPlaylistFetching,
  refreshButtonEnabled,
  token
};
