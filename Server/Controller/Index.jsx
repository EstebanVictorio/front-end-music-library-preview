import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {Store} from 'Store';
import { Provider } from 'react-redux';
import HomeContainer from 'Container/Page/HomeContainer';
import FileSystem from 'fs';
import Path from 'path';

export default class Index{
  constructor(request,response){
    this.request = request;
    this.response = response;
    this.htmlStringTemplate = '<div id="#app"></div>';
    this.htmlFilePath = Path.resolve('./index.html');
    this.html = null;
    this.fileCharset = 'utf8';
  }

  canUserAccess(){
    return typeof this.request.query.access_token !== undefined;
  }

  getIndexMarkUp(){
    return <Provider store={Store}>
      <HomeContainer/>
    </Provider>;
  }

  handleOnRead(error,data){
    if(error){
      this.error = error;
    }else{
      let markup = this.getIndexMarkUp();
      let app = ReactDOMServer.renderToString(markup);
      this.html =
        data.replace(this.htmlStringTemplate,`<div id="#app">${app}</div>`);
    }
    let responseBody = this.html !== null ?
      this.html : `<div>${this.error}</div>`;
    this.response.send(responseBody);
  }

  prepareContent(){
    FileSystem.readFile(this.htmlFilePath,this.fileCharset,
        (error,data) => this.handleOnRead(error,data));
  }


  render(){
    this.prepareContent();
  }
}
