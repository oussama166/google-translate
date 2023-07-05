const express = require('express');
const translate = require('google-translate-api');
const app = express();

app.get('/api', (req, res) => {
    translate('Ik spreek Engels', {to: 'en'}).then(res => {
        console.log(res.text);
        //=> I speak English
        console.log(res.from.language.iso);
        //=> nl
    }).catch(err => {
        console.error(err);
    });
        res.json({ message: 'Hello from server!' });

}
);

app.listen(5000, () => {
    console.log('Server is running on port 5000.');
}
);