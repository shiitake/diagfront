var express = require('express');
var router = express.Router();
var profiler = require('../data/profiler.json');

/* GET users listing. */
router.get('/', function (req, res) {
    res.send(profiler);
});

module.exports = router;