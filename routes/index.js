var express = require('express');
var router = express.Router();
var path = express().get('views')

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.sendFile(path+'/this.html')
});

module.exports = router;
