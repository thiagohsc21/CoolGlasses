
// import mongoose from 'mongoose';

// async function mongoSetup() {
// await mongoose.connect('mongodb+srv://adrio:adrio1234@cluster0.eq0pvr4.mongodb.net/?retryWrites=true&w=majority', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   });
// }
  
// const Product = require('@/model/products');


const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const schema = require('./model/products');
const controller = require('./controler/products');

const app = express();
const port = 8888;

mongoose.connect("mongodb+srv://adrio:adrio1234@cluster0.eq0pvr4.mongodb.net/?retryWrites=true&w=majority")
//                mongodb+srv://adrio:1234@cluster0.eq0pvr4.mongodb.net/?retryWrites=true&w=majority
  .then(() => console.log('connected to mongodb'))
  .catch(e => console.error(e));

app.use(cors());
app.use(bodyParser.json());


app.get('/', controller.get);
app.get('/:id', controller.getById);
app.post('/', controller.post);
app.put('/:id', controller.put);


app.listen(port, () => {
  console.log(`listening on ${port}`);
});