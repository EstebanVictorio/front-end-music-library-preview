import React from 'react';
import Loader from 'react-loader-spinner';
export default function Swiper(props){
  let {component,onClick, name = '', elements = null} = props;
  let Component = component;
  console.log('render');
  return (
    <div id={name} className="swiper-container">
        <div className="swiper-wrapper">
          {
            elements.map(element => <div key={element.id}
              className="swiper-slide">
                <Component onClick={onClick} {...element}/>
              </div>)
          }
        </div>
      <div className="swiper-pagination"></div>
  </div>
  );
}
