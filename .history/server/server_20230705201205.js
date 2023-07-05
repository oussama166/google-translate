const express = require('express');
const GoogleTranslator = require('@translate-tools/core/translators/GoogleTranslator');


const translator = new GoogleTranslator.GoogleTranslator();

const app = express();

app.get('/', (req, res) => {
    const textToTranslate = 'Hello World';
    const sourceLanguage = 'en';
    const targetLanguage = 'es';

    translateText(textToTranslate, sourceLanguage, targetLanguage)
        .then(translatedText => {
            console.log(translatedText);
            console.log(textToTranslate);
            res.json({ original: textToTranslate }, { translated: translatedText });
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ error: 'Translation failed' });
        });
});

app.listen(5000, () => {

    const textToTranslate = 'Hello World';
    const sourceLanguage = 'en';
    const targetLanguage = 'es';

    console.log('Server listening on port 5000');

    translateText(textToTranslate, sourceLanguage, targetLanguage)
    .then(translatedText => {
        console.log(translatedText);
        console.log(textToTranslate);
    })
    .catch(err => {
        console.error(err);

    });
});

function translateText(text, from, to) {
    return new Promise((resolve, reject) => {
        translator.translate(text,  from, to )
            .then(translationResult => {
                const translatedText = translationResult;
                resolve(translatedText);
            })
            .catch(err => {
                reject(err);
            });
    });
}
