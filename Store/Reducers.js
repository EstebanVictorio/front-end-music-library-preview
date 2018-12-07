import {SET_CURRENT_SONG, SET_PLAYLIST,SET_PLAYLIST_PLACEHOLDER,IS_PLAYLIST_FETCHING, PLAYLIST_FETCH_DONE} from './ActionTypes';


const fetching = (state = false, action) => {
  switch(action.type){
    case IS_PLAYLIST_FETCHING:
      state = action.fetching;
      return state;
    default:
      return state;
  }
};

const playlist = (state = [], action) => {
  switch(action.type){
    case SET_PLAYLIST:
      return action.playlist;
    case SET_PLAYLIST_PLACEHOLDER:
      return action.placeholder;
    default:
      return state;
  }
};

const pendingAdditions = (state = [], action) => {
  switch (action.type) {
    case expression:

      break;
    default:

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
  fetching,
  playlist,
  currentSong
};
