const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
module.exports = mongoose.connect('mongodb://localhost:27017/cursoImpactaAbr21DB', {
    useNewUrlParser : true, 
    useUnifiedTopology : true
});