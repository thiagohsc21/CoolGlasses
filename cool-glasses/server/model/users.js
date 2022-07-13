
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    nome : {
        type : String,
        trim: true
    },
    email : { type: String },
    cpf : {type: String},
    telefone : {type : String},
    celular : {type : String},
    senha : {type : String},
    admin : {type : String},
    endereco : {
        rua : String,
        numero : String,
        bairro : String,
        complemento : String,
        cep : String
    }
});

module.export = mongoose.model('User', schema);
