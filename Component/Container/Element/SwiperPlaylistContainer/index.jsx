import React from 'react';
import Swiper from 'Presentational/Element/Swiper';
import iDangerousSwiper from 'swiper/dist/js/swiper.esm.bundle';
import Loader from 'react-loader-spinner';
class SwiperPlaylistContainer extends React.Component{
  constructor(props){
    super(props);
    this.swiper = null;
    this.oldActiveIndex = 0;
  }

  componentDidUpdate(prevProps){
    if(!this.props.isPlaylistFetching){
      if(this.props.playlist.length > 0){
        this.oldActiveIndex = this.swiper !== null ? this.swiper.clickedIndex:0;
        let finalSettings =
          {
            ...this.props.settings,
            initialSlide: this.oldActiveIndex
          };
        this.swiper =
          new iDangerousSwiper(`#${this.props.name}`,finalSettings);
      }else{
        this.swiper = null;
      }
    }
  }

  getPlaceholder(){
    if(this.props.isPlaylistFetching){
      return <Loader type="Oval" width="50" height="100" color="#61DAFB"/>;
    }
    return <div>
        {this.props.fetchError.errorMessage} -
        {typeof this.props.fetchError.errorStatus != 'undefined' ?
          'Error Code:':''}
        {this.props.fetchError.errorStatus}
      </div>;
  }

  render(){
    return (
        !this.props.isPlaylistFetching && this.props.playlist.length > 0 ?
        <Swiper
          name={this.props.name}
          elements={this.props.playlist}
          component={this.props.component}
          translator={this.props.translator}
          addOnComponent='button'
          addOnText='Set'
          addOnAction={this.props.setCurrentSong}/> : this.getPlaceholder()
    );
  }
}

export default SwiperPlaylistContainer;
