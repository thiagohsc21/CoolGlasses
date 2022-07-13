
const mongoose = require('mongoose');
const User = mongoose.model('User');

exports.get = (req, res, next) => {
    User.find({})
    .then( data => {
        res.status(200).send(data);
    }).catch ( e => {
        res.status(400).send(e)
    })
} 

exports.post = (req, res, next) => {
    var user = new User(req.body);
    user.save().then(x => {   
        res.status(201).send({message: 'CADASTRADO!'});
    }).catch(e => {
        res.status(400).send({mensage : 'Falha ao Cadastrar.', data : user})
    });
}

exports.getByNome = (req, res, next) => {
    User.findOne({
        nome : req.params.nome
    })
    .then( data => {
        res.status(200).send(data);
    }).catch ( e => {
        res.status(400).send(e)
    })
}

exports.getById = (req, res, next) => {
    User.findOne({
        _id : req.params.id
    })
    .then( data => {
        res.status(200).send(data);
    }).catch ( e => {
        res.status(400).send(e)
    })
}


exports.put = (req, res, next) => {
    User.findByIdAndUpdate({_id : req.params.id},
        req.body)
    .then ( x => {
        res.status(200).send({message: 'ATUALIZADO!'});
    }).catch ( e => {
        res.status(400).send({message : 'Erro no PUT'})
    })
}

exports.delete = (req, res, next) => {
    User.findByIdAndDelete(req.params.id)
    .then ( x => {
        res.status(200).send({message: 'DELETADO!'});
    }).catch ( e => {
        res.status(400).send({message : 'Erro no DELETE'})
    })
}