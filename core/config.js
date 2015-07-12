
var path = require('path'),
	rootPath = path.normalize(__dirname + '/..'),
	config,
	sharedConfig;

var sharedConfig = {
	root: rootPath,
	db : {
		path: {}
	}
};

config = {
	local: {
		mode:	'local',
		port:	3001,
		app: {
			name: 'Nodo - Local'
		},
		url:	'',
		global:	sharedConfig
	},

	development: {
		mode:	'dev',
		port:	3001,
		app: {
			name: 'Nodo - Dev'
		},
		global:	sharedConfig
	},

	staging: {
		mode:	'staging',
		port:	3001,
		app: {
			name: 'Nodo - Staging'
		},
		global:	sharedConfig
	},

	production: {
		mode:	'prod',
		port:	3001,
		app: {
			name: 'Nodo - Production'
		},
		global:	sharedConfig
	},

	hosts: [
		{
			domain: 'nodo.local',
			target: ['localhost:3001']
		}
	]
};


// Export config
module.exports = config;