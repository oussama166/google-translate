const express = require('express');
const app = express();

const GoogleTranslator = require('@translate-tools/core/translators/GoogleTranslator');


const translator = new GoogleTranslator.GoogleTranslator();




app.get('/', (req, res) => {
    res.json({ message: Translate('Hello World', 'en', 'es') });
});


// Translate single string
app.listen(5000, () => {
    console.log('Server listening on port 5000');
    console.log(Translate('Hello World', 'en', 'es'));
});



function Translate(text, from, to) {
    var result =  translator.translate(text, from, to).then((result) => {}
    return result;
}