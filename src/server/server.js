import express from 'express';
import bodyParser from 'body-parser';
import colors from 'colors'; // eslint-disable-line
import compression from 'compression';
import routes from './routes/routes';

// TODO: move this to a config
const port = process.env.PORT || 3000;

require('@babel/polyfill');

// ******************************
// Set up server and application configuration
const server = express();

// ******************************
// Attach middleware
server.use(compression());

// parses incoming JSON request bodies
server.use(bodyParser.json());

// parses incoming url encoded bodies
// "extended: true" allows key value pairs where value can be any data type
server.use(bodyParser.urlencoded({ extended: true }));

// ******************************
// Set up static paths
server.use(express.static('build'));

// ******************************
// Attach routes
server.use(routes);

// ******************************
// Start Server
const serverResponse = () => console.log(`A Spiritualist medium has summoned a server on port ${port}.`);
server.listen(port, serverResponse);
