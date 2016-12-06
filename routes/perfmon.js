var express = require('express');
var router = express.Router();
var perfmon = require('../data/perfmon.json');

/* GET users listing. */
router.get('/', function (req, res) {
    res.send(perfmon);
});

module.exports = router;