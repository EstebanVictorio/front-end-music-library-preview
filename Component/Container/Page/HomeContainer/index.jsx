import React from 'react';
import Home from 'Presentational/Page/Home';
import { connect } from 'react-redux';
import {fetchPlaylistAsync} from 'Store/Actions';
import iDangerousSwiper from 'swiper';
const mapStateToProps = (state, ownProps) => ({
  playlist: state.playlist.songs
});

const mapDispatchToProps = dispatch => ({
  fetchPlaylistAsync: () => dispatch(fetchPlaylistAsync())
});

class HomeContainer extends React.Component{
  constructor(props){
    super(props);
    this.swiper = null;
  }

  componentDidMount(){
    this.props.fetchPlaylistAsync();
  }


  render(){
    return <Home current={null} playlist={this.props.playlist}/>;
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(HomeContainer);
