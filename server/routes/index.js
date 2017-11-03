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

router.post('/rmdirectory',function(req,res){
  console.log("In directory remove");
  console.log(req.body);
  
  for (let i = 0; i < directory.length;i++){
    console.log(directory[i]["name"]);
    if (directory[i]["name"] == req.body){
        directory.splice(i,1);
    }
}
})

module.exports = router;
