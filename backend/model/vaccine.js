const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//monggose

// Define collection and schema
let vaccine = new Schema({
  vaccine_name: {
    type: String
  },
  vaccine_email: {
    type: String
  },
  section: {
    type: String
  },
  subjects: {
    type: Array
  },
  gender: {
    type: String
  },
  dob: {
    type: Date
  }
}, {
  collection: 'students'
})

module.exports = mongoose.model('vaccine', vaccine)