/**
 * This is the primary entry file for the BlockVotez application.
 * This file will render the React UI experience on the frontend. 
 * (?) This file will also contain real-time communication capabilities if that functionality is added to the application
 */
// node_module imports
const express = require('express');
const app = express();
const http = require('http');
const logger = require('morgan');
const dotenv = require('dotenv').config();
const errorHandler = require('errorhandler');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const history = require('connect-history-api-fallback');
const serveStatic = require('serve-static');
const Eth = require('web3-eth');
const eth = new Eth(Eth.givenProvider || 'http://localhost:7545');

console.log('The accounts are:', eth.getAccounts());
// Disabled because startMongo is only to start the mongoose connection
// eslint-disable-next-line no-unused-vars

// Set application locals
app.set('appName', 'BlockVotez');
app.set('port', dotenv.parsed.PORT);

// Configure history re-routing to avoid errors with external links in React
app.use(history({
    rewrites: [
        {
            from: /^\/api\/.*$/,
            to: context => context.parsedUrl.path,
        },
    ],
}));

//Configure static rendering
app.use(serveStatic(path.join(__dirname, 'build')));

// Standard middleware
app.use(logger());
app.use(errorHandler());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 404 response middleware 
app.use((req, res) => {
    res.status(404).send('Route not found');
});

// Render the React application when the home endpoint is hit
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Create node server 
const server = http.createServer(app);

// Have the server listen either on the development or production port.
server.listen(app.get('port'), () => {
    console.log(`Server listening on port: ${app.get('port')}`);
});

// Handle uncaught exceptions
process.on('uncaughtException', err => {
    console.log(`Process uncaught exception!!!!!: ${err.message}`);
});