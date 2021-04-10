const express = require('express');

module.exports = server => {
    const router = express.Router();
    server.use('/api', router);

    const cursosController = require('../services/cursos/controller');
    cursosController.register(router, '/cursos');

    const contatoController = require('../services/contatos/controller');
    contatoController.register(router, '/contatos');
}