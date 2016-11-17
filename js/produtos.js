$(document).ready(function(){
    $.getJSON('/model/produtos.json', function(retorno) {
    //console.log(retorno);
        $('#lista-produtos tbody').empty(); // empty para limpar a lista antes de exibir
        var total = 0;
        retorno.forEach(function(obj, idx) {
            console.log(obj, idx);
            total += obj.quantidade;
            //var preco = obj.preco.toString().split('.');
            var tr = "<tr>"
                    + "<td>"+ obj.codigo +"</td>"
                    + "<td>"+ obj.nome +"</td>"
                    + "<td>"+ obj.marca +"</td>"
                    //+ "<td>R$"+ preco[0] +','+ preco[1] +"</td>"
                    + "<td>R$"+ formataValor(obj.preco) +"</td>"
                    + "<td>"+ obj.quantidade +"</td>"
                    + "</tr>";
            $('#lista-produtos tbody').append(tr);
        });
        $('#quantidade-total').html(total);
    });
    
    $('#codigo').keydown(function(key){
        //console.log(key)
        if((key.keyCode >= 48 && key.keyCode <= 57) || (key.keyCode >= 96 && key.keyCode <= 105)){
            return true;
        }else if(key.keyCode == 8 || key.keyCode == 9){
            return true;
        }else{
            return false;
        }
    });
    
});

function formataValor(valor){
    var partes = valor.toString().split('.');
    
    if(partes[1] == undefined){
        partes[1] = '00';
    }
    if(partes[1].length < 2){
        partes[1] += '0';
    }
    
    var retorno = partes[0]+','+partes[1];
    return retorno;
}