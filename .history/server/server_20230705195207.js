const express = require('express');
const app = express();

const GoogleTranslator = require('@translate-tools/core/translators/GoogleTranslator');


const translator = new GoogleTranslator.GoogleTranslator();




app.get('/', (req, res) => {
    res.json({ message: "Hello wordl" });

});


// Translate single string
app.listen(5000, () => {

});



function Translate(text, from, to) {
    return new Promise((resolve, reject) => {
        translator.translate(text, from, to).then((result) => {
            return result);
        }).catch((err) => {
            reject(err);
        });
    });
}