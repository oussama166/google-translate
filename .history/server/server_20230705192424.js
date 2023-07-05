const GoogleTranslator = require('@translate-tools/core/translators/GoogleTranslator');

const translator = new GoogleTranslator.AbstractGoogleTranslator();


// Translate single string
// translator
//     .translate('Hello world', 'en', 'de')
//     .then((translate) => console.log('Translate result', translate));