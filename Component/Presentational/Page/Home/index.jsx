import React from 'react';
import {HomePlaylist} from 'Settings/Swiper';
import Showcase from 'Presentational/Element/Card/Showcase';
import PlaylistContainer from 'Container/Element/PlaylistContainer';
import SwiperPlaylistContainer from 'Container/Element/SwiperPlaylistContainer';

export default function Home({current = null, playlist = []}) {
  console.log('Playlist:');
  console.log(playlist);
  return (
    <div className='home'>
      <p>Current song:</p>
      <div className='current-song'>
        <Showcase {...current}/>
      </div>
      <SwiperPlaylistContainer name='home-playlist' settings={HomePlaylist}
        component={Showcase} playlist={playlist}/>
    </div>
  );
}
