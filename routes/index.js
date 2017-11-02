var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('home');
});

router.get('/all_patrons', function(req, res, next){
	res.render('all_patrons');
});

router.get('/all_loans', function(req, res, next){
	res.render('all_loans');
});

module.exports = router;
