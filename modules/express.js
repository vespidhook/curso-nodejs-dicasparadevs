const express = require('express');
const UserModel = require('../src/models/user.model')

const app = express();

app.get('/home', (req, res) => {
    res.contentType('aplication/html');
    res.status(200).send('<h1>Hello world</h1>');
})

app.get('/users', (req, res) => {
    const users = [
        { name: 'Bruno', age: 30 },
        { name: 'Maria', age: 25 },
        { name: 'José', age: 40 }
    ];
    res.contentType('application/json');
    res.status(200).json(users);
})

app.post('/users', (req, res) => {
    const user = UserModel(req.body);
    
    res.status(201).json(user)
})

const port = 8080;

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});