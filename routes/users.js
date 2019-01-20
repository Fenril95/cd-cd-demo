var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/get', function (req, res, next) {
   res.json({'user': '1231'});
});

router.get('/get/:id', function(req, res, next) {
    res.json({"user": "user id is req.id123123123"})
})

module.exports = router;
