const nodeRestful = require('node-restful');

const schemaAtividade = new nodeRestful.mongoose.Schema({
    descricao : {type : String, required : true},
    duracao : {type : Number, required : true},
});

const schema = new nodeRestful.mongoose.Schema({
    nome : {type : String, required : true},
    endereco : {type : String},
    avaliacao : {type : Number, default : 0, min: 0, max: 5},
    atividades : [schemaAtividade]
});

module.exports = nodeRestful.model('clientes', schema);