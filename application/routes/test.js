var express = require('express');
var router = express.Router();

router.get('/',function(req,res,next) {
  var val = parseInt(req.query.num);
  if (val === 9) {
    var ans = "Right asnwer";
  }
  else {
    var ans = "Wrong answer !!!"
  }
  res.send(ans);
});

module.exports = router;
