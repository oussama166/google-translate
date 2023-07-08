const express = require('express');

const GoogleTranslator = require('@translate-tools/core/translators/GoogleTranslator');

const translator = new GoogleTranslator.GoogleTranslator();

const app = express();


app.get('/api?', (req, res) => {
    const textToTranslate = req.query.text;
    const sourceLanguage = req.query.from;
    const targetLanguage = req.query.to;

    translateText(textToTranslate, sourceLanguage, targetLanguage)
        .then(translatedText => {
            res.json({ message: translatedText, original: textToTranslate });
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ error: 'Translation failed' });
        });
});

app.listen(5000, () => {
    console.log('Server listening on port 5000');

});




function translateText(text, from, to) {
    return new Promise((resolve, reject) => {
        translator.translate(text, from, to)
            .then(translationResult => {
                resolve(translationResult);
            })
            .catch(err => {
                reject(err);
            });
    });
}








