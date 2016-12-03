// set variables for environment
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var routes = require('./routes/index');
var scenarios = require('./routes/scenarios');

// views as directory for all template files
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug'); 

// instruct express to server up static assets
app.use(express.static('public'));

//parse some json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//set routes
app.get('/', routes);
app.use('/scenarios', scenarios);

// Set server port
app.listen(4000);
console.log('server is running');