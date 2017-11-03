var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.sendFile('index.html', { root: 'public' });
});

router.get('/directory',function(req, res) {
  console.log("In directory");
});

module.exports = router;
