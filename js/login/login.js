$(function(){
    $("#formulario").submit(function(evento){
        evento.preventDefault();

        var dados = $("#formulario").serialize();

        $.post("model/login.php", dados, function(retorno){
            if(retorno){
                document.location = "produtos.html";
            }else{
                alert("Usuário não encontrado!!!");
            }
        }, 'json');
    });
});
