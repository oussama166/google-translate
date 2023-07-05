const express = require('express');
const translate = require('google-translate-api');
const app = express();


translate('Ik spreek Engels', { to: 'en' }).then(res => {
    res.json({ message: res.text });
    //=> I speak English
    console.log(res.from.language.iso);
    //=> nl
}).catch(err => {
    console.error(err);
});

app.get('/api', (req, res) => {
    res.json({ message: resb });

}
);

app.listen(5000, () => {
    console.log('Server is running on port 5000.');
}
);