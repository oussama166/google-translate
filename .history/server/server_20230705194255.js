const express = require('express');
const app = express();
const GoogleTranslator = require('@translate-tools/core/translators/GoogleTranslator');


const translator = new GoogleTranslator.GoogleTranslator();

app.get('/', (req, res) => {
    res.json({ message:  });

});


// Translate single string
app.listen(5000, () => {
    translator
    .translate('Hello world', 'en', 'en')
    .then((translate) => console.log('Translate result', translate));
});

