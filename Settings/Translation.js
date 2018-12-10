import English from 'Settings/Language/English.json';
import Spanish from 'Settings/Language/Spanish.json';

let translationSettings =
  {
    resources: {
      en: {
        en: English
      },
      es: {
        es: Spanish
      }
    },
    ns:['en', 'es'],
    interpolation: {
      escapeValue: false
    },
    fallbackLng: 'en'
  };

export {
  translationSettings
};
