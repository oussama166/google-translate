const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.json({ message: Translate('Hello World', 'en', 'es')  });

});


// Translate single string
app.listen(5000, () => {

});



function Translate(text, from, to) {
    return new Promise((resolve, reject) => {
        translator.translate(text, from, to).then((result) => {
            resolve(result);
        }).catch((err) => {
            reject(err);
        });
    });
}