const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
   data: String,
   approved: Boolean,
   user:{
      //grava so a refencia do ID do usuário
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
   },
   spot:{
      //grava so a refencia do ID spot
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Spot'
   }

});

module.exports = mongoose.model('Booking', BookingSchema);