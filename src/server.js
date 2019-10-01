const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');

//recebe o express
const app = express();

mongoose.connect('mongodb+srv://vini:vini123@bancoapi-xvgwp.mongodb.net/aricnc?retryWrites=true&w=majority', {
   useNewUrlParser: true,
   useUnifiedTopology: true
});

//o express utiliza o formato json
app.use(express.json()); 

//utiliza o arquivo de rotas
app.use(routes);

//inicia a porta
app.listen(3000); 