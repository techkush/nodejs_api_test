# nodejs_api_test
How to make a API use in JavaScript (Node Js)

How to install

1. npm init
2. npm install --save express

3. create Server.js and Copy this code ->

const http = require('http');
const app = require('./app');

const port = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(port);

4. create app.js and copy this code ->

const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
//routes path
const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');
const LocationRoutes = require('./api/routes/locations');

//get feedback from client
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Routes which should handle request
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);
app.use('/location', LocationRoutes);

//error handling part 1
app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
});

module.exports = app;

//------------------------
// app.use((req, res, next) => {
//     res.status(200).json({
//         message: 'It works!'
//     })
// });

5. node server.js -> goto browser and serach http://localhost:3000 (cmd ipcongig -> ipv4 address) / http://192.168.1.7:3000
6. npm install --save-dev nodemon and add this part in package.json ->
  scrip: {
    "start": "nodemon server.js"
  }
7. npm start (Automatically restart when you save the code)
8. npm install --save morgan
9. npm install --save body-parser

