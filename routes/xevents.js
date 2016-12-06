var express = require('express');
var router = express.Router();
var xevents = require('../data/xevents.json');

/* GET users listing. */
router.get('/', function (req, res) {
    res.send(xevents);
});

module.exports = router;