var express = require('express');
var router = express.Router();
var mongoose = require('mongoose')
var User = require('../models/User')

/* HOW THE MODEL WORKS

var test = User.find({ firstName: 'Nelte'});
test.exec()
.then(test => {
  console.log(test)
})
*/


/* GET users listing. */
router.get('/', function (req, res, next) {

  res.send('respond with a resource')
})

router.post('/signup', async (req, res) => {
  try {
    await User.create({
      firstName: req.body.values.firstName,
      lastName: req.body.values.lastName,
      email: req.body.values.email,
      password: req.body.values.password,
      age: req.body.values.age
    })

    res.status(201).send({
      success: true,
      message: 'User created succesfully'
    })
  } catch (err) {
    res.status(409).send({
      success: false,
      message: err.keyPattern
    })
  }
})

module.exports = router;
