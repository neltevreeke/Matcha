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
router.get('/', function(req, res, next) {
  // res.send(test);

  res.send('respond with a resource');
});

router.post('/signup', (req, res) => {

  res.send({
    message: true
  })
})

module.exports = router;
