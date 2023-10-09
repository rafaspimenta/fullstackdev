const express = require('express');

const app = express();

app.use(express.json());

app.use(express.urlencoded( { extended: false}));

app.post('/contact', (req, res) => {
    if (!req.body.name) {
        return res.status(400).send('Name is required');
    }
    res.status(201).send(`Thank you ${req.body.name}`);
});

app.put('/post/:id', (req, res) => {
    res.json({
        id: req.params.id,
        title: req.body.title
    })
})

let server = app.listen(5000, () => console.log(`Server started on ${server.address().port}`));