var express = require('express');
var router = express.Router();
var mongoose = require('mongoose')
var User = require('../models/User')
var bcrypt = require('bcryptjs')

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

router.post('/login', async (req, res) => {
  try {
    const foundUser = await User.findOne({
      'email': req.body.values.email
    })

    if (!foundUser) {
      res.status(404).send({
        success: false,
        message: 'Email does not exist'
      })
    }

    if (!bcrypt.compareSync(req.body.values.password, foundUser.password)) {
      res.status(409).send({
        success: false,
        message: 'Passwords do not match'
      })
    }
    
    // generate jwt

    res.status(200).send({
      success: true,
      message: 'log in successfull'
      // token
    })
  } catch (err) {
    console.error(err)

    // return an error

  }
})

module.exports = router;
