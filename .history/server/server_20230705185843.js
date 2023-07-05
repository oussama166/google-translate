const express = require('express');
const translate = require('google-translate-api');
const app = express();


app.get('/api', (req, res) => {
    res.json({ message: translate("bonjour") });

}
);

asy app.listen(5000, () => {
    console.log('Server is running on port 5000.'); 
    translate('Ik spreek Engels', { to: 'en' }).then(res => {
        console.log(res.text);
        //=> I speak English
        console.log(res.from.language.iso);
        //=> nl
    }).catch(err => {
        console.error(err);
    });
}
);

