const express = require('express');
const app = express();
const GoogleTranslator = require('@translate-tools/core/translators/GoogleTranslator');


const translator = new GoogleTranslator.GoogleTranslator();

app.get('/', (req, res) => {
    res.json({ message: 'Hello from server!' });

});


// Translate single string
app.listen(5000, () => {
    translator.translate('Hello world', 'en', 'ar').then((translate) => console.log('Translate result', translate));
    

});

