var express = require('express');
var router = express.Router();
var mongoose = require('mongoose')
var User = require('../models/User')
var bcrypt = require('bcryptjs')
var jwt = require('jsonwebtoken')


router.get('/', function (req, res, next) {

  res.send('respond with a resource')
})

router.post('/signup', async (req, res) => {
  const salt = bcrypt.genSaltSync(10)
  const hash = bcrypt.hashSync(req.body.values.password, salt)

  try {
    await User.create({
      firstName: req.body.values.firstName,
      lastName: req.body.values.lastName,
      email: req.body.values.email,
      password: hash,
      age: req.body.values.age
    })
  } catch (err) {
    res.status(409).send({
      success: false,
      message: err.keyPattern
    })
  }

  res.status(201).send({
    message: 'User created succesfully'
  })
})

router.post('/login', async (req, res) => {
    let foundUser;

    console.log('hereeeeeeeeeeeeeeeeeeeee')

    try {
      foundUser = await User.findOne({
        'email': req.body.values.email
      })
    } catch (err) {
      res.status(500).send({
        message: 'Internal server error'
      });
    }

    if (!foundUser) {
      res.status(404).send({
        message: 'Email does not exist'
      })
    }

    if (!bcrypt.compareSync(req.body.values.password, foundUser.password)) {
      res.status(409).send({
        message: 'Passwords do not match'
      })
    }

    const token = jwt.sign(foundUser.toJSON(), process.env.JWT_SECRET)

    res.status(200).send({
      message: 'log in successfull',
      token
    })
})

module.exports = router;
