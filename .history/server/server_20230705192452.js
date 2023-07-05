const GoogleTranslator = require('@translate-tools/core/translators/GoogleTranslator');

const translator = new GoogleTranslator.AbstractGoogleTranslator();


// Translate single string
console.log(await translator.translate('Hello world!', 'en', 'ru'));