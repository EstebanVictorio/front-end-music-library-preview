import {put,call,takeEvery, all} from 'redux-saga/effects';
import QueryString from 'query-string';
import {
  setPlaylist,
  setFetchError,
  setCurrentSong,
  fetchPlaylistAsyncEnd,
  disableRefreshButton,
  enableRefreshButton
} from './Actions';
import {headers} from 'Settings/Request';
import {getFetchConfigWithToken} from 'Utils/RequestHelper';

function * fetchPlaylistAsync(){
  let spotifyResponse = null;
  let queryStringParams = QueryString.parse(window.location.search);
  yield put(disableRefreshButton());
  let token = typeof queryStringParams.access_token !== 'undefined' ?
  queryStringParams.access_token:'none';
  let fetchConfig = getFetchConfigWithToken(token,headers);
  yield fetch('/getPlaylist',fetchConfig)
    .then(response => response.json()).then(json => spotifyResponse = json);
  if(spotifyResponse.songs.length === 0){
    let error = {
      errorStatus:spotifyResponse.errorStatus,
      errorMessage:spotifyResponse.errorMessage
    };
    yield put(setFetchError(error));
  }else{
    yield put(setCurrentSong(spotifyResponse.songs[0]));
  }
  yield put(setPlaylist(spotifyResponse));
  yield put(fetchPlaylistAsyncEnd());
  yield put(enableRefreshButton());
}

function * bootstrapSagaNotice(){
  console.log('Started sagas!');
}

function * watchFetchPlaylistAsync(){
  yield takeEvery('FETCH_PLAYLIST_ASYNC',fetchPlaylistAsync);
}

function * masterSaga(){
  yield all([
    bootstrapSagaNotice(),
    watchFetchPlaylistAsync()
  ]);
}

export {masterSaga};
