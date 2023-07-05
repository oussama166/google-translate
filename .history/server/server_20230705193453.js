const express = require('express');
const app = express();
const GoogleTranslator = require('@translate-tools/core/translators/GoogleTranslator');


const translator = new GoogleTranslator.GoogleTranslator();


// Translate single string
app.listen(5000, () => {
    console.log('Server is running on port 5000');
    trans.translate('Hello world', 'en', 'de')
	.then((translate) => console.log('Translate result', translate));
    

});

