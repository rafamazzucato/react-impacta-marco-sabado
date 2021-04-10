const nodeRestful = require('node-restful');

const schema = new nodeRestful.mongoose.Schema({
    data: { type: Date, required: true},
    dataResposta : {type : Date},
    nome: { type: String, required: true },
    email: { type: String, required: true },
    assunto: { type: String, required: true }
});

module.exports = nodeRestful.model('contatos', schema);