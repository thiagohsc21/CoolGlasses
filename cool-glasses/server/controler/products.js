
const mongoose = require('mongoose');
const Product = mongoose.model('Product');

exports.get = (req, res, next) => {
    Product.find({})
    .then( data => {
        res.status(200).send(data);
    }).catch ( e => {
        res.status(400).send(e)
    })
}

exports.post = (req, res, next) => {
    var product = new Product(req.body);
    product.save().then(x => {   
        res.status(201).send({message: 'CADASTRADO!'});
    }).catch(e => {
        res.status(400).send({mensage : 'Falha ao Cadastrar.', data : product})
    });
}

exports.getByNome = (req, res, next) => {
    Product.findOne({
        nome : req.params.nome
    })
    .then( data => {
        res.status(200).send(data);
    }).catch ( e => {
        res.status(400).send(e)
    })
}

exports.getById = (req, res, next) => {
    Product.findOne({
        _id : req.params.id
    })
    .then( data => {
        res.status(200).send(data);
    }).catch ( e => {
        res.status(400).send(e)
    })
}


exports.put = (req, res, next) => {
    Product.findByIdAndUpdate({_id : req.params.id},
        req.body)
    .then ( x => {
        res.status(200).send({message: 'ATUALIZADO!'});
    }).catch ( e => {
        res.status(400).send({message : 'Erro no PUT'})
    })
}

exports.delete = (req, res, next) => {
    Product.findByIdAndDelete(req.params.id)
    .then ( x => {
        res.status(200).send({message: 'DELETADO!'});
    }).catch ( e => {
        res.status(400).send({message : 'Erro no DELETE'})
    })
}