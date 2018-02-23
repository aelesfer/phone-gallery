var express = require('express'),
  app = express(),
  port = process.env.PORT || 4100,
  bodyParser = require('body-parser');

app.listen(port);
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

// Avoid CORS in chrome
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Add timeout for loading visualization
app.use(function(req, res, next){
  res.setTimeout(2000, function(res){
    next();
  });
});

var routes = require('./api/phones.routes');
routes(app);

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});


console.log('Backend ready and listening at port: ' + port);
