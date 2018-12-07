import React from 'react';
import Playlist from 'Presentational/Element/List/Playlist';
import Loader from 'react-loader-spinner';
export default class PlaylistContainer extends React.Component{
  constructor(props){
    super(props);
    this.state =
    {
      songs:
      [
        {albumArt:'',name:'Song 1',author:'Author 1'},
        {albumArt:'',name:'Song 2',author:'Author 2'},
        {albumArt:'',name:'Song 3',author:'Author 3'}
      ]
    };
  }

  render(){
    return (
      this.state.songs !== null ?
        <Playlist songs={this.state.songs}/> :
          <Loader type="Oval" width="50" height="100" color="#61DAFB"/>
    );

  }
}
