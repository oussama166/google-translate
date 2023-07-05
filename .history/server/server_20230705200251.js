const express = require('express');
const translate = require('google-translate-api');

const app = express();

app.get('/', (req, res) => {
  const textToTranslate = 'Hello World';
  const sourceLanguage = 'en';
  const targetLanguage = 'es';

  translateText(textToTranslate, sourceLanguage, targetLanguage)
    .then(translatedText => {
      res.json({ message: translatedText });
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
    translate(text, { from, to })
      .then(translationResult => {
        const translatedText = translationResult.text;
        resolve(translatedText);
      })
      .catch(err => {
        reject(err);
      });
  });
}
