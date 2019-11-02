var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/signup', (req, res) => {
  const user = req.body
  console.log(user.firstName)
  
  res.send({
    message: true
  })
})

module.exports = router;
