const express = require('express');

module.exports = server => {
    const router = express.Router();
    server.use('/api', router);

    const clientesController = require('../services/clientes/controller');
    clientesController.register(router, '/clientes');
}