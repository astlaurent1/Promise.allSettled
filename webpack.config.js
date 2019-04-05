'use strict';

var path = require('path');

module.exports = {
	entry: './promise-allsettled.js',
	output: {
		filename: 'promise-allsettled.js',
		path: path.resolve(__dirname, 'dist')
	}
};
