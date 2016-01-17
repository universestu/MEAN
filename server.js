var express = require('./config/express');
var app = express();
process.env.NODE_ENV = process.env.NODE_ENV || 'development';


app.listen(3000);
module.exports = app;

console.log('Server running')