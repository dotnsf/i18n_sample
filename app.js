//. app.js

var express = require( 'express' ),
    fs = require( 'fs' ),
    ejs = require( 'ejs' ),
    i18n = require( 'i18n' ),
    request = require( 'request' ),
    session = require( 'express-session' ),
    app = express();

var port = 3000;

app.set( 'views', __dirname + '/public' );
app.set( 'view engine', 'ejs' );

i18n.configure({
  locales: ['en', 'fr', 'ja'],
  directory: __dirname + '/locales'
});
app.use( i18n.init );

app.use( function( req, res, next ){
  if( req.session && req.session.locale ){
    i18n.setLocale( req, req.session.locale );
  }
  next();
});

app.get( '/', function( req, res ){
  res.render( 'index' );
});

app.listen( port );
console.log( "server starting on " + port + " ..." );
