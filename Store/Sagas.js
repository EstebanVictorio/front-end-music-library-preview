import {put,call,takeEvery, all} from 'redux-saga/effects';
import {setPlaylist} from './Actions';
import QueryString from 'query-string';
function * fetchPlaylistAsync(){
  let playlist = null;
  let headers = new Headers({'Content-Type':'application/json'});
  let token = QueryString.parse(window.location.search).access_token;
  let fetchConfig =
    {
      method: 'POST',
      body: JSON.stringify({token:token}),
      headers: headers
    };
  playlist = yield fetch('http://localhost:8888/getPlaylist',fetchConfig)
    .then(response => response.json()).then(json => json);
  yield put(setPlaylist(playlist));
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
