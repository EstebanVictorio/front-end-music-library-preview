import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Store, setTranslator} from 'Store';
import HomeContainer from 'Container/Page/HomeContainer';
import i18next from 'i18next';
import {withI18n, reactI18nextModule, withNamespaces} from 'react-i18next';
import {translationSettings} from 'Settings/Translation';
import {getClientLanguage} from 'Utils/LanguageSelector';
let language = getClientLanguage();
let newTranslationSettings = {
  ...translationSettings,
  lng: language,
  defaultNS: language
};
i18next.use(reactI18nextModule).init(newTranslationSettings);

let App = ({t}) =>
  <Provider store={Store}>
    <HomeContainer t={t}/>
  </Provider>;

let TranslatedApp = withNamespaces()(App);

ReactDOM.hydrate(<TranslatedApp/>,document.querySelector('#app'));
