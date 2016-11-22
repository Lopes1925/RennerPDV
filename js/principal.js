$(function(){
    
    var carregando = '<div id="background_preto">'+
                     '<div id="mensagem-carregando"><img src="img/ajax-loader.gif" alt="Carregando..."/></div></div>';
    
    $("body").prepend(carregando);
    
    $(document).ajaxStart(function() {
       $('#background_preto').show();
    });
    $(document).ajaxStop(function() {
       $('#background_preto').hide();
    });
});