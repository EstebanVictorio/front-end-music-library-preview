import React from 'react';

const PLACEHOLDER = "./Images/album_placeholder.png";


function getAddOnComponent(addOnComponent, text, addOnAction, actionArgs){
  switch (addOnComponent) {
    case 'button':
      return <input className='showcase-button'
        type='button'
        value={text}
        onClick={() => addOnAction(actionArgs[0])}/>;
    default:
      return <div>Default component</div>;
  }
}

export default function Showcase(props) {
  let {
    translator,
    albumSpotifyURL = '',
    artistSpotifyURL = '',
    albumArt = '',
    name = '',
    author = '',
    addOnComponent = '',
    addOnText,
    addOnAction
  } = props;

  let songInfo = {
    name,
    author,
    albumArt,
    albumSpotifyURL,
    artistSpotifyURL
  };
  return (
    <div className='showcase'>
      <a href={albumSpotifyURL}>
      <img src={albumArt !== '' ? albumArt: PLACEHOLDER} alt='Album'/>
      </a>
      <div className="track">
        <h2>{translator('song')}:
          {name !== '' ? name :  '---' }</h2>
      </div>
      <div className="artist">
        <a href={artistSpotifyURL}>
          {translator('author')}: {author !== '' ? author : '---' }
        </a>
      </div>
      {
        addOnComponent !== '' ?
        getAddOnComponent(addOnComponent,addOnText,addOnAction,[songInfo]):null
      }
    </div>
  );
}
