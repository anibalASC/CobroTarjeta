var express = require('express');
var router = express.Router();
var Conekta = require('conekta');
Conekta.api_key = "key_7gjMqee2mr4ys93sn79TYQ";
Conekta.api_version = "2.0.0"

router.post('/create',function(request,response){
  // console.log(Conekta,'conekta url');
  // console.log(request,'request');
  // Creacion del cliente
  var customer = Conekta.Customer.create({
    'name': request.body.name,
    'email': request.body.email,
    'phone': request.body.phone,
    'payment_sources': [{
      'type': 'card',
      'token_id': request.body.conektaTokenId
    }]
  }, function(err, res) {
      if(err){
        console.log(err);
        return;
      }
      console.log(res.toObject());
  });
  console.log(customer);
  response.send(JSON.stringify(customer));
});


module.exports = router;
