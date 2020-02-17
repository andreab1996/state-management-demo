const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

const server = express();
server.use(bodyParser.json());

mongoose.connect(
    process.env.DB_CONNECTION,
    {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    })
    .then(() => console.log('DB Connected!'))
    .catch(err => {
        console.log(`DB Connection Error: ${err.message}`);
    });

server.get('/', async (req, res) => {
    res.send('Hello Andrea');
});



const usersRoute = require('./routes/users');
server.use('/users', usersRoute);



server.listen(3000);