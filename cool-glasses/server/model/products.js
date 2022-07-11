
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    nome : {
        type : String,
        trim: true
    },
    descricao : { type: String },
    imagem : {type: String},
    preco : {type : Number},
    estoque : {type : Number},
    vendidos : {type : Number}
});

module.export = mongoose.model('Product', schema);
