const express = require('express');
const translate = require('google-translate-api');
const app = express();

app.get('/api', (req, res) => {
    translate('Ik spreek Engels', {to: 'en'}).then(rest => {
        console.log(rest.text);
        //=> I speak English
        console.log(rest.from.language.iso);
        //=> nl
    }).catch(err => {
        console.error(err);
    });

}
);

app.listen(5000, () => {
    console.log('Server is running on port 5000.');
}
);