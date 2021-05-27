const express = require('express');
const app = express();
const vaccineRoute = express.Router();

// vaccine model
let vaccine = require('../model/vaccine');

// Add vaccine
vaccineRoute.route('/add-vaccine').post((req, res, next) => {
  vaccine.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get all vaccine
vaccineRoute.route('/').get((req, res) => {
  vaccine.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get single vaccine
vaccineRoute.route('/read-vaccine/:id').get((req, res) => {
  vaccine.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update vaccine
vaccineRoute.route('/update-vaccine/:id').put((req, res, next) => {
  vaccine.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('vaccine successfully updated!')
    }
  })
})

// Delete vaccine
vaccineRoute.route('/delete-vaccine/:id').delete((req, res, next) => {
  vaccine.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = vaccineRoute;