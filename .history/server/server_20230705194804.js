const express = require('express');
const translate = require('./utils');
const { default: Translate } = require('./utils');
const app = express();


app.get('/', (req, res) => {
    res.json({ message: Translate  });

});


// Translate single string
app.listen(5000, () => {

});



