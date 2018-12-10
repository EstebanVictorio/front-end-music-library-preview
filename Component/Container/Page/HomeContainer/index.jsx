import React from 'react';
import Home from 'Presentational/Page/Home';
import { connect } from 'react-redux';
import {fetchPlaylistAsync,setCurrentSong} from 'Store/Actions';
import iDangerousSwiper from 'swiper';

const mapStateToProps = (state, ownProps) => ({
  playlist: state.playlist.songs,
  fetchError: state.fetchError,
  isPlaylistFetching: state.isPlaylistFetching,
  currentSong: state.currentSong,
  token: state.token,
  refreshButtonEnabled: state.refreshButtonEnabled
});

const mapDispatchToProps = dispatch => ({
  fetchPlaylistAsync: () =>
    dispatch(fetchPlaylistAsync()),
  setCurrentSong: song =>
    dispatch(setCurrentSong(song))
});

class HomeContainer extends React.Component{
  constructor(props){
    super(props);
    this.translator = this.props.t;
    this.refreshPlaylist = this.refreshPlaylist.bind(this);
  }

  componentDidMount(){
    this.props.fetchPlaylistAsync();
    setInterval(() => this.props.fetchPlaylistAsync(),(1000 * 120));
  }

  refreshPlaylist(){
    this.props.fetchPlaylistAsync();
  }


  render(){
    return <Home current={null} translator={this.translator}
      isPlaylistFetching={this.props.isPlaylistFetching}
      fetchError={this.props.fetchError}
      playlist={this.props.playlist}
      currentSong={this.props.currentSong}
      refreshButtonEnabled={this.props.refreshButtonEnabled}
      refreshPlaylist={this.refreshPlaylist}
      setCurrentSong={this.props.setCurrentSong}/>;
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(HomeContainer);
