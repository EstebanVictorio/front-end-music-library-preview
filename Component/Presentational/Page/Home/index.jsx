import React from 'react';
import {HomePlaylist} from 'Settings/Swiper';
import Showcase from 'Presentational/Element/Card/Showcase';
import SwiperPlaylistContainer from 'Container/Element/SwiperPlaylistContainer';

export default function Home(props) {
  let {
    refreshPlaylist,
    translator,
    isPlaylistFetching,
    fetchError,
    currentSong = null,
    playlist = [],
    refreshButtonEnabled,
    setCurrentSong
  } = props;
  return (
    <div className='home'>
      <input id='refresh-button' type='button' value='Refresh Playlist'
        disabled={!refreshButtonEnabled}
        onClick={() => refreshPlaylist()}/>
      <p>{translator('currentSong')}:</p>
      <div className='current-song'>
        <Showcase {...currentSong} translator={translator}/>
      </div>
      <SwiperPlaylistContainer
        name='home-playlist' settings={HomePlaylist}
        component={Showcase} playlist={playlist}
        translator={translator} fetchError={fetchError}
        isPlaylistFetching={isPlaylistFetching}
        setCurrentSong={setCurrentSong}
        />
      <div className="disclaimer-info">
        <h2>API Resources owned and provided by:</h2>
        <img id="spotify-white-logo" src='./Images/Spotify_Logo_RGB_White.png'/>
      </div>
    </div>
  );
}
