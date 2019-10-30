var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(res.body)
  res.send('respond with a resource');
});

router.get('/signup', (req, res) => {
  res.send(JSON.parse(req))
  console.log('signuppp')
})

module.exports = router;
