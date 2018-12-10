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

const enableRefreshButton = () => ({
  type: ENABLE_REFRESH_BUTTON
});

const disableRefreshButton = () => ({
  type: DISABLE_REFRESH_BUTTON
});

const setFetchError = error => ({
  type: SET_ERROR,
  errorStatus: error.errorStatus,
  errorMessage: error.errorMessage
});

const fetchPlaylistAsync = () => ({
  type: FETCH_PLAYLIST_ASYNC
});

const fetchPlaylistAsyncEnd = () => ({
  type: FETCH_PLAYLIST_ASYNC_END
});

const setPlaylist = songs => ({
  type: SET_PLAYLIST,
  playlist: songs
});

const setCurrentSong = song => ({
  type: SET_CURRENT_SONG,
  song: song
});

const setToken = token => ({
  type: SET_TOKEN,
  token: token
});

export {
  setToken,
  setPlaylist,
  setFetchError,
  setCurrentSong,
  enableRefreshButton,
  disableRefreshButton,
  fetchPlaylistAsync,
  fetchPlaylistAsyncEnd
};
