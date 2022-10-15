'use strict';

const path = require('path');

module.exports = {
	// eslint-disable-next-line require-jsdoc
	resolve: function(dir) {
		return path.join(__dirname, dir)
	},
}
