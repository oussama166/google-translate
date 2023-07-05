const GoogleTranslator = require('@translate-tools/core/translators/GoogleTranslator');

const translator = new GoogleTranslator.AbstractGoogleTranslator();


// Translate single string
console.log(translator(translator.LANGUAGES.ENGLISH, translator.LANGUAGES.SPANISH, 'Hello World!'));