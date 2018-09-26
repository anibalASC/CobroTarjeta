var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();


// configure bodyParse
app.use(bodyParser.urlencoded({
    extended:true
}));
app.use(bodyParser.json());

// views with jade
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

//routes
app.get('/', function(req,res){
    console.log('Ejecutando');
    
    res.render('index');
});

app.post('/charge', function(req, res){
    
    
    var keys = require('./keys.json')
    var conekta = require('conekta');
    conekta.api_key = 'key_DEqxeDVx4tRMXwTWsxdrmNQ';
    conekta.api.version = '2.0.0';
    
    conekta.api_key = keys.private
    conekta.api_version = "3.2.1"
    console.log(conekta,'<-------conekta');
    
    
    conekta.charge.create(req.body, function(err,charge){
        if(err){
            return res.render('charge', {
                charge: res
            });
        }
        res.render('charge', {
            charge: charge.toObject()
        - console.log(conekta,'<-------conekta termina')
        });
    });
});

app.listen(4000);

module.exports = app;

// conekta.api_version = "3.5.1"