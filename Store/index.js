import {createStore, combineReducers, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {masterSaga} from './Sagas';
import Reducers from './Reducers';
import {
  startPlaylistFetch,
  endPlaylistFetch,
  setPlaylistPlaceholder,
  setPlaylist,
  setCurrentSong,
  setTranslator
} from './Actions';
let sagaMiddleware = createSagaMiddleware();
let Store = createStore(combineReducers(Reducers),applyMiddleware(sagaMiddleware));
sagaMiddleware.run(masterSaga);
export {
  Store,
  startPlaylistFetch,
  endPlaylistFetch,
  setPlaylistPlaceholder,
  setPlaylist,
  setCurrentSong,
  setTranslator
};
