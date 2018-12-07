  import {FETCH_PLAYLIST_ASYNC,SET_CURRENT_SONG, SET_PLAYLIST, SET_PLAYLIST_PLACEHOLDER,IS_PLAYLIST_FETCHING,PLAYLIST_FETCH_DONE} from './ActionTypes';
const startPlaylistFetch = () => ({
  type: IS_PLAYLIST_FETCHING,
  fetching: true
});

const fetchPlaylistAsync = () => ({
  type: FETCH_PLAYLIST_ASYNC
});

const endPlaylistFetch = () => ({
  type: IS_PLAYLIST_FETCHING,
  fetching: false
});


const setPlaylistPlaceholder = () => ({
  type: SET_PLAYLIST_PLACEHOLDER
});

const setPlaylist = songs => ({
  type: SET_PLAYLIST,
  playlist: songs
});

const setCurrentSong = song => ({
  type: SET_CURRENT_SONG,
  song: song
});

export {
  fetchPlaylistAsync,
  startPlaylistFetch,
  endPlaylistFetch,
  setPlaylistPlaceholder,
  setPlaylist,
  setCurrentSong
};
