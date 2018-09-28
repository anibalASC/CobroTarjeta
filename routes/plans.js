var express = require('express');
var router = express.Router();
var Conekta = require('conekta');
var moment = require('moment');

Conekta.api_key = "key_7gjMqee2mr4ys93sn79TYQ";
Conekta.api_version = "2.0.0"

router.get('/', function(req, res, next) {
  res.render('plan');
});

router.post('/create', function(request,response){
  var created_at = moment().format('X')
  var planObject = {
    "id":request.body.idPlan,
    "object":request.body.object,
    "livemode": request.body.livemode == "true" ? true : false,
    "created_at": created_at,
    "name": request.body.name,
    "amount": request.body.amount,
    "currency":request.body.currency,
    "interval": request.body.interval,
    "frequency": request.body.frequency,
    "expiry_count": request.body.expiry,
    "trial_period_days":request.body.trial
  }
  Conekta.Plan.create(planObject, function(err, res) {
      if(err){
        console.log(err,'error');
        return;
      }
      console.log(res.toObject(),'creado');
  })
  response.send('Probando')
});

module.exports = router;
