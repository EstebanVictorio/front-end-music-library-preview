import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Store} from 'Store';
import HomeContainer from 'Container/Page/HomeContainer';

let App = () => <Provider store={Store}>
    <HomeContainer/>
  </Provider>;

ReactDOM.hydrate(<App/>,document.querySelector('#app'));
