import React from 'react';
import Swiper from 'Presentational/Element/Swiper';
import iDangerousSwiper from 'swiper/dist/js/swiper.esm.bundle';
import Loader from 'react-loader-spinner';

class SwiperPlaylistContainer extends React.Component{
  constructor(props){
    super(props);
    this.swiper = null;
    this.state = {
      playlist:
        [
          {id:1,albumArt:'',name:'---', author:'---'}
        ],
      swiper: null
      };
  }

  componentDidUpdate(prevProps){
    if(this.props.playlist !== prevProps.playlist){
      this.swiper =
        new iDangerousSwiper(`#${this.props.name}`,this.props.settings);    
    }
  }

  render(){
    console.log('Playlist');
    console.log(this.props.playlist.length);
    return (
      this.props.playlist.length > 0 ?
        <Swiper name={this.props.name}
          elements={this.props.playlist}
          component={this.props.component}/> :
          <Loader type="Oval" width="50" height="100" color="#61DAFB"/>
    );
  }
}

export default SwiperPlaylistContainer;
