// public key key_DEqxeDVx4tRMXwTWsxdrmNQ
// private key key_7gjMqee2mr4ys93sn79TYQ

var conektaSuccessResponseHandler = function (token) {
    var $form = $("#card-form");
    //Inserta el token_id en la forma para que se envíe al servidor
    $form.append($('<input name="conektaTokenId" id="conektaTokenId">').val(token.id));
    $form.get(0).submit(); //Hace submit
};
var conektaErrorResponseHandler = function (response) {
    var $form = $("#card-form");
    $form.find(".card-errors").text(response.message_to_purchaser);
    $form.find("button").prop("disabled", false);
};

$(function () {
    //jQuery para que genere el token después de dar click en submit
    Conekta.setPublicKey('key_DEqxeDVx4tRMXwTWsxdrmNQ');

    $("#card-form").submit(function(e) {
        e.preventDefault();
        var form = $(this);
        // Previene hacer submit más de una vez
        form.find("button").prop("disabled", true);
        Conekta.Token.create(form, conektaSuccessResponseHandler, conektaErrorResponseHandler);
        return false;
    });

});
