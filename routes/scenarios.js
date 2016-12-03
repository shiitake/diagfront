var express = require('express');
var router = express.Router();
var scenarios = require('../data/scenarios.json');

/* GET users listing. */
router.get('/', function (req, res) {
    res.send(scenarios);
});

module.exports = router;