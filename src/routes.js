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
const ApprovalController = require('./controllers/ApprovalController');
const RejectController = require('./controllers/RejectionController');

const routes = express.Router();
const upload = multer(uploadConfig);

//rotas....
routes.post('/session', SessionController.store);

routes.post('/spot', upload.single('thumbnail'), SpotController.store);
routes.get('/spots', SpotController.index);
routes.post('/spots/:spot_id/bookings', BookingController.store);

routes.get('/dashboard', DashboardController.show);

routes.post('/bookings/:booking_id/approvals', ApprovalController.store);
routes.post('/bookings/:booking_id/rejects', RejectController.store);


module.exports = routes;