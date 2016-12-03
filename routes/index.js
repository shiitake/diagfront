var express = require('express');
var router = express.Router();
var scenarios = require('../data/scenarios.json');


/* GET home page. */
router.get('/', function (req, res) {
	res.render('index', { title: 'DiagConfig', scenarios: scenarios });
});

module.exports = router;