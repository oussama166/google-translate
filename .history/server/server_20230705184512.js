const express = require('express');
const translate = require('google-translate-api');
const app = express();

app.get('/api', (req, res) => {
    res.json({ message: 'Hello from server!' });
    translate.

}
);

app.listen(5000, () => {
    console.log('Server is running on port 5000.');
}
);