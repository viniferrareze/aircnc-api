const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const socketio = require('socket.io');
const http = require('http')

//recebe o express
const app = express();

//pega o servidor http e extrai do modulo express.
const server = http.Server(app);

//a partir deste momento o servidor está tambem ouvindo o protocolo websocket
const io = socketio(server);

mongoose.connect('mongodb+srv://vini:vini123@bancoapi-xvgwp.mongodb.net/aricnc?retryWrites=true&w=majority', {
   useNewUrlParser: true,
   useUnifiedTopology: true
});


const connectedUsers = {};

//ouve o usuário que esta logado na aplicação
io.on('connection', socket => {

   const {user_id} = socket.handshake.query;

   //armazena o id do usuário e do id do socket
   connectedUsers[user_id] = socket.id;
});

//adiciona uma funcionalidade em toda a rota
app.use((req, res, next) => {
   //todas as rotas tem acesso ao io e usuários conetados
   req.io = io;
   req.connectedUsers = connectedUsers;

   return next();
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
//app.listen(3333); 
//aplicação pronta para ouvir o protocolo http e websockte
server.listen(3333); 