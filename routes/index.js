var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/A', function(req, res, next) {
    var x = req.body.value;
    res.send(""+Math.pow(x, 2));
});

router.post('/B', function(req, res, next) {
    var x = req.body.value;
    res.send(""+(10 * x));
});

router.post('/C', function(req, res, next) {
    var x = req.body.value;
    res.send(""+(x + 20));
});

router.post('/D', function(req, res, next) {
    var x = req.body.value;
    res.send(""+Math.log(x));
});

router.post('/E', function(req, res, next) {
    var x = req.body.value;
    res.send(""+Math.sqrt(x));
});

module.exports = router;
