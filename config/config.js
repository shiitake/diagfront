var path = require('path'),
	rootPath = path.normalize(__dirname + '/..'),
	env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'diagfront'
    },
    port: process.env.PORT || 4000,
  },

  test: {
    root: rootPath,
    app: {
      name: 'diagfront'
    },
    port: process.env.PORT || 5000,
  },

  production: {
    root: rootPath,
    app: {
      name: 'diagfront'
    },
    port: process.env.PORT,
  }
};

module.exports = config[env];