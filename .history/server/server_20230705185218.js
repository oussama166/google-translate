const express = require('express');
const translate = require('google-translate-api');
const app = express();


app.get('/api', (req, res) => {
    res.json({ message: resb });

}
);

app.listen(5000, () => {
    console.log('Server is running on port 5000.');
}
);


function translateInput(input) {
    translate(input, { to: 'en' }).then(res => {
        console.log(res.text);
         = res.text;
        console.log(res.from.language.iso);
    }).catch(err => {
        console.error(err);
    });
}