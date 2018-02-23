/*jslint node: true */
'use strict';

var fs = require('fs');
var Phone = require('./phone.model');

exports.list_all_phones = function(req, res) {
  fs.readFile('./phone.mock.json', 'utf8', function(err, data) {
    res.setHeader('Content-Type', 'application/json');
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(JSON.parse(data, function(key, value) {
        // Check if we are at reviver's top-level
        if (Array.isArray(this) && value.name) {
          return new Phone(value);
        }
        return value;
      }));
    }
  });
};
