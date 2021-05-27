const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//monggose

// Define collection and schema
let vaccine = new Schema({
  vaccine_email: {
    type: String
  },
  password:{
      type: password
  },
  passwordr:{
      type: password
  }
}, {
  collection: 'students'
})

module.exports = mongoose.model('vaccine', vaccine)