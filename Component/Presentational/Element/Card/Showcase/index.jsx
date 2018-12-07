import React from 'react';

const PLACEHOLDER = "./Images/album_placeholder.png";

export default function Showcase({albumArt = '', name = '', author = ''}) {
  return (
    <div className='showcase'>
      <img src={albumArt !== '' ? albumArt: PLACEHOLDER} alt='Album'/>
      <h2>Song: {name !== '' ? name :  '---' }</h2>
      <h3>Author: {author !== '' ? author : '---' }</h3>
    </div>
  );
}
