import fetch, {Headers} from 'node-fetch';
import AuthController from './Auth';
import AuthSettings from 'Settings/Auth';
const IMAGE_300_X_300 = 1;
const CHOSEN_ARTIST = 0;

export default class Spotify{
  constructor(token){
    this.authController = new AuthController();
    this.token = token;
    this.responseByFormat = null;
    this.playlistID = 'your_playlist_id';
    this.resourceURL = 'https://api.spotify.com/v1/playlists/';
    this.fetchConfig = {method: 'GET', headers: null };
  }

  async refreshToken(){
    this.token = await this.authController.issueToken();
  }

  prepareRequestHeaders(){
    this.fetchConfig.headers = new Headers({
      'Authorization': `Bearer ${this.token}`
    });
  }

  async getPlaylist(){
    let spotifyResponse = null;
    let attempts = 3;
    for(let i = attempts; i > 0;i--){
      this.prepareRequestHeaders();
      await fetch(this.resourceURL + this.playlistID,this.fetchConfig)
        .then(async response => spotifyResponse = await response.json());
      if(typeof spotifyResponse.tracks !== 'undefined'){
        return spotifyResponse;
      }
      await this.refreshToken();
    }
    return spotifyResponse;
  }

  getTrackByFormat(fullTrackInfo, index){
    let id = index + 1;
    return {
      id: id,
      albumSpotifyURL: fullTrackInfo.track.album.external_urls.spotify,
      artistSpotifyURL:
        fullTrackInfo.track.artists[CHOSEN_ARTIST].external_urls.spotify,
      albumArt: fullTrackInfo.track.album.images[IMAGE_300_X_300].url,
      name: fullTrackInfo.track.name,
      author: fullTrackInfo.track.artists[CHOSEN_ARTIST].name,
    };
  }

  async getPlaylistByFormat(){
    let spotifyResponse = await this.getPlaylist();
    let responseHasError = typeof spotifyResponse.error !== 'undefined';
    return {
      songs: responseHasError ? [] :
        spotifyResponse.tracks.items.map((fullTrackInfo,index) =>
          this.getTrackByFormat(fullTrackInfo,index)),
      errorStatus: responseHasError ? spotifyResponse.error.status : '---',
      errorMessage: responseHasError ? spotifyResponse.error.message: 'None'
    };
  }

  async fetchPlaylist(){
    this.responseByFormat = await this.getPlaylistByFormat();
    return this.responseByFormat;
  }
}
