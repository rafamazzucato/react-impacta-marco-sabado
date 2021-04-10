const express = require('express');
const cors = require('./cors');
const authJwt = require('./auth-jwt');

const port = 3200;
const server = express();

server.use(express.urlencoded({extended : true}));
server.use(express.json());
server.use(cors);

authJwt(server);

server.listen(port, () => console.log(`Servidor disponível na porta: ${3200}`));

module.exports = server;