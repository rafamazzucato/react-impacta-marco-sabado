const controller = require('./schema');

controller.methods(['get', 'post', 'put']);
controller.updateOptions({ new : true, runValidators : true});

module.exports = controller;