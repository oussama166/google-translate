const express = require('express')

const app = express()

app.get('/ap', (req, res) => {
    res.send('Hello World')
});

app.listen(5000, () => {
    console.log('Server is up on port 3000')
})




