import express from 'express'

const app = express()

app.get('/api', (req, res) => {
    res.send('Hello World')
});

app.listen(5000, () => {
    console.log('Server is up on port 5000')
})




