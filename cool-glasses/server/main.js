
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const schema = require('./model/products');
const controller = require('./controler/products');
const uploadImg = require('./middlewares/uploadImage');
const schemaP = require('./model/products');
const schemaU = require('./model/users');
const controllerProduct = require('./controler/products');
const controllerUser = require('./controler/users');

const app = express();
const port = 8888;
                  
//conectando ao mongodb
mongoose.connect("mongodb+srv://admin:admin@cluster0.jddmxkc.mongodb.net/?retryWrites=true&w=majority")
  .then(() => console.log('connected to mongodb'))
  .catch(e => console.error(e));

app.use(cors());
app.use(bodyParser.json());


app.get('/', controllerProduct.get);
app.get('/:id', controllerProduct.getById);
app.post('/', controllerProduct.post);
app.put('/:id', controllerProduct.put);
app.delete('/:id', controllerProduct.delete);

app.post("/upload-image", uploadImg.single('image'), async (req, res) => {

  if (req.file) {
      console.log(req.file);
      return res.json({
          erro: false,
          mensagem: "Upload realizado com sucesso!"
      });
  }

  return res.status(400).json({
      erro: true,
      mensagem: "Erro: Upload não realizado com sucesso, necessário enviar uma imagem PNG ou JPG!"
  });



});
app.get("/user/", controllerUser.get);
app.get('/user/:id', controllerUser.getById);
app.get('/user/email/:email', controllerUser.getByEmail);
app.post('/user/', controllerUser.post);
app.put('/user/:id', controllerUser.put);

app.listen(port, () => {
  console.log(`listening on ${port}`);
});