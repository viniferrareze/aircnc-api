const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

//recebe o express
const app = express();

mongoose.connect('mongodb+srv://vini:vini123@bancoapi-xvgwp.mongodb.net/aricnc?retryWrites=true&w=majority', {
   useNewUrlParser: true,
   useUnifiedTopology: true
});

//qualquer aplicação pode acessar a api
app.use(cors());

//o express utiliza o formato json
app.use(express.json()); 

//retorna arquivos estaticos
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));

//utiliza o arquivo de rotas
app.use(routes);

//inicia a porta
app.listen(3333); 