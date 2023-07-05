const express = require('express');
const app = express();
const GoogleTranslator = require('@translate-tools/core/translators/GoogleTranslator');
const translate = require('google-translate-api');

const translator = new GoogleTranslator.AbstractGoogleTranslator();


// Translate single string
app.listen(5000, () => {
    console.log('Server is running on port 5000');
    translate

});

