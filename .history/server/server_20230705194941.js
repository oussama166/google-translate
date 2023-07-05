const express = require('express');
const Translate  = require('utils.js');
const app = express();


app.get('/', (req, res) => {
    res.json({ message: Translate('Hello World', 'en', 'es')  });

});


// Translate single string
app.listen(5000, () => {

});



