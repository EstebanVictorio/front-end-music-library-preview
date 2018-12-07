import fetch, {Headers} from 'node-fetch';
const IMAGE_300_X_300 = 1;
const CHOSEN_ARTIST = 0;
export default class Spotify{
  constructor(token){
    this.token = token;
    this.playlist = null;
    this.playlistID = '6XqYqNjxESUv1hBObMywLA';
    this.resourceURL = 'https://api.spotify.com/v1/playlists/';
    this.headers = {};
    this.fetchConfig = {method: 'GET', headers: null };
  }

  prepareRequestHeaders(){
    this.fetchConfig.headers = new Headers({
      'Authorization': `Bearer ${this.token}`
    });
  }

  getTrackByFormat(fullTrackInfo){
    let track = {
      albumArt: fullTrackInfo.track.album.images[IMAGE_300_X_300].url,
      name: fullTrackInfo.track.name,
      author: fullTrackInfo.track.artists[CHOSEN_ARTIST].name
    };
    return track;
  }

  getPlaylistByFormat(rawPlaylist){
    if(rawPlaylist === null || rawPlaylist === []){
      return [];
    }
    let rawTracks = rawPlaylist.tracks.items;
    return rawTracks.map(fullTrackInfo => this.getTrackByFormat(fullTrackInfo));
  }

  async fetchPlaylist(){
    let rawPlaylist = null;
    this.prepareRequestHeaders();
    console.log('Token:');
    console.log(this.token);
    await fetch(this.resourceURL + this.playlistID,this.fetchConfig)
      .then(async response => rawPlaylist = await response.json())
      .catch(reason => {rawPlaylist = [];console.log(reason);});
    this.playlist = this.getPlaylistByFormat(rawPlaylist);
    return {songs: this.playlist};
  }
}
