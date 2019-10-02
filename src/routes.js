// req.query = acessar o query params - utilizado em filtros
// req.params = acessar os parametros da rota.
// req.body = acessar os corpo da requisição
const express = require('express');
const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');
const multer = require('multer');
const uploadConfig = require('./config/upload');
const DashboardController = require('./controllers/DashboardController');
const BookingController = require('./controllers/BookingController');


const routes = express.Router();
const upload = multer(uploadConfig);

//rotas....
routes.post('/session', SessionController.store);

routes.post('/spot', upload.single('thumbnail'), SpotController.store);
routes.get('/spots', SpotController.index);
routes.post('/spots/:id/bookings', BookingController.store);

routes.get('/dashboard', DashboardController.show);



module.exports = routes;