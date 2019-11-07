var express = require('express');
var router = express.Router();
var User = require('../models/User')
var bcrypt = require('bcryptjs')
var jwt = require('jsonwebtoken')
var checkToken = require('../controllers/auth')

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
      age: req.body.values.age,
      gender: req.body.values.gender
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

router.get('/me', checkToken, async (req, res) => {
  delete req.decode.password

  res.send({
    user: req.decode
  })
})

router.post('/login', async (req, res) => {
    let foundUser;

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
