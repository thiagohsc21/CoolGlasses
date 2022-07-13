
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const schemaP = require('./model/products');
const schemaU = require('./model/users');
const controllerProduct = require('./controler/products');
const controllerUser = require('./controler/users');

const app = express();
const port = 8888;

mongoose.connect("mongodb+srv://adrio:adrio1234@cluster0.eq0pvr4.mongodb.net/?retryWrites=true&w=majority")
//                mongodb+srv://adrio:1234@cluster0.eq0pvr4.mongodb.net/?retryWrites=true&w=majority
  .then(() => console.log('connected to mongodb'))
  .catch(e => console.error(e));

app.use(cors());
app.use(bodyParser.json());


app.get('/', controllerProduct.get);
app.get('/:id', controllerProduct.getById);
app.post('/', controllerProduct.post);
app.put('/:id', controllerProduct.put);

app.get("/user/", controllerUser.get);
app.get('/user/:id', controllerUser.getById);
app.post('/user/', controllerUser.post);
app.put('/user/:id', controllerUser.put);

app.listen(port, () => {
  console.log(`listening on ${port}`);
});