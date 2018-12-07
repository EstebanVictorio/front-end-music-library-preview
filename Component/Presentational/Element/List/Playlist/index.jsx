import React from 'react';
import Showcase from 'Presentational/Element/Card/Showcase';
export default function Playlist({songs = []}){
  return (
    <div className='playlist playlist-h'>
      {songs.map(songInfo => <Showcase songInfo={songInfo}/>)}
    </div>
);
}
