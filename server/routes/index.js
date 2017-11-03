var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.sendFile('index.html', { root: 'public' });
});

var directory = [
  {
    name: "Example",
    number: "444-forget-it",
    email: "example@gmail.com"
  }
];

router.get('/directory',function(req, res) {
  console.log("In directory");
  res.send(directory);
});

router.post('/directory',function(req,res){
  console.log("In directory post");
  console.log(req.body);
  directory.push(req.body);
  res.end('{"success" : "Updated Successfully", "status" : 200}');
})

module.exports = router;
