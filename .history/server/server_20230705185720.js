const express = require('express');
const translate = require('google-translate-api');
const app = express();


app.get('/api', (req, res) => {
    res.json({ message: translate("bonjour") });

}
);

app.listen(5000, () => {
    console.log('Server is running on port 5000.');
    console.log(translateInput("bonjour"));
}
);


asfunction translateInput(input) {
    await translate(input, { from: "fr", to: 'en' }).then(res => {
        return res;
    }).catch(err => {
        console.error(err);
    });
}