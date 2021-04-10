const controller = require('./schema');

controller.methods(['get', 'post', 'put', 'delete']);
controller.updateOptions({new : true, runValidators : true});

module.exports = controller;