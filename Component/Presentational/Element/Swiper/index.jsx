import React from 'react';
import Loader from 'react-loader-spinner';

export default function Swiper(props){
  let {
    component,
    onClick,
    translator,
    name = '',
    elements = null,
    addOnComponent,
    addOnText,
    addOnAction
  } = props;
  let Component = component;
  return (
    <div id={name} className="swiper-container">
        <div className="swiper-wrapper">
          {
            elements.map(element =>
              <div key={typeof element.id === 'undefined'? '':element.id}
              className="swiper-slide">
                <Component
                  translator={translator}
                  addOnComponent={addOnComponent}
                  addOnText={addOnText}
                  addOnAction={addOnAction}
                  onClick={onClick} {...element}/>
              </div>)
          }
        </div>
      <div className="swiper-pagination"></div>
  </div>
  );
}
