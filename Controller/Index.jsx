import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {Store} from 'Store';
import { Provider } from 'react-redux';
import HomeContainer from 'Container/Page/HomeContainer';
import FileSystem from 'fs';
import Path from 'path';
import i18next from 'i18next';
import {withI18n, reactI18nextModule, withNamespaces} from 'react-i18next';
import {translationSettings} from 'Settings/Translation';
import {getServerLanguage} from 'Utils/LanguageSelector';
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

  getLanguageSettings(){
    let language = getServerLanguage();
    let newTranslationSettings = {
      ...translationSettings,
      lng: language,
      defaultNS: language
    };
    return newTranslationSettings;
  }

  getIndexMarkUp(){

    i18next.use(reactI18nextModule).init(this.getLanguageSettings());

    let App = ({t}) => <Provider store={Store}>
      <HomeContainer t={t}/>
    </Provider>;

    let TranslatedApp = withNamespaces()(App);

    return TranslatedApp;
  }

  handleOnRead(error,data){
    if(error){
      this.error = error;
    }else{
      let TranslatedApp = this.getIndexMarkUp();
      let app = ReactDOMServer.renderToString(<TranslatedApp/>);
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
