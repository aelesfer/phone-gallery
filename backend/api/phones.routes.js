/*jslint node: true */
'use strict';

module.exports = function(app) {
	var phonesController = require('./phones.controller');

	app.route('/phones')
    .get(phonesController.list_all_phones);
};
