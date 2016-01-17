var express = require('express');
var morgan = require('morgan');
var compression = require('compression');
var bodyParser = require('body-parser');
var sass = require('node-sass-middleware')
module.exports = function  (){
	var app = express();

	if (process.env.NODE_ENV === 'development'){          //
			app.use(morgan('dev'));
	}
	else {
			app.use(compression);
	}

	app.use(bodyParser.urlencoded({
		extended : true
	}));
	app.use(bodyParser.json());

	app.set('views','./app/views');

	app.set('view engine','jade');  // html template engine

	require('../app/routes/index')(app);      // routing

	app.use(sass({
		src: './sass',
		dest: './public/css',
		outputStyle: 'compact',
		prefix: '/css',
		indentedSyntax:true
	}));

	app.use(express.static('./public'));  // static file
	

	return app;

}