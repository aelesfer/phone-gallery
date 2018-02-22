var express = require('express'),
  app = express(),
  port = process.env.PORT || 4100,
  bodyParser = require('body-parser');

app.listen(port);
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

var routes = require('./api/phones.routes');
routes(app);

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});


console.log('Backend ready and listening at port: ' + port);
