const express = require('express');
const app = express();
const GoogleTranslator = require('@translate-tools/core/translators/GoogleTranslator');


const translator = new GoogleTranslator.GoogleTranslator();

app.get('/', (req, res) => {
    req.json

});


// Translate single string
app.listen(5000, () => {
    translator.translate('Hello world', 'en', 'de').then((translate) => console.log('Translate result', translate));
    

});

