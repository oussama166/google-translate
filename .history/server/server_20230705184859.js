const express = require('express');
const translate = require('google-translate-api');
const app = express();

app.get('/api', (req, res) => {
    let resb = ''
    translate('Ik spreek Engels', {to: 'en'}).then(rest => {
        resb = rest.text;
        //=> I speak English
        console.log(rest.from.language.iso);
        //=> nl
    }).catch(err => {
        console.error(err);
    });
    res.send({text :resb })

}
);

app.listen(5000, () => {
    console.log('Server is running on port 5000.');
}
);