
$(document).ready(function () {
    function limparForm() {
        $('#bairro').val("");
        $('#cidade').val("");
        $('#estado').val("");
        $('#rua').val("");
        $('#ibge').val("");
        $('#ddd').val("");
        $('#gia').val("");
        $('#siafi').val("");
    }

    $("#cep").mask("00000-000");


})


function sweetError(){
    Swal.fire({
        icon: 'error',
        title: 'Erro!',
        text: 'Insira um CEP válido, por favor!',
      })
}

const input = document.getElementById("campo");

input.addEventListener("keyup", formatarCep);



$('#cep').blur(function () {

    const cep = document.querySelector("#cep").addEventListener('keyup', ()=> {
        var v = e.target.value.replace(/\D/g,"")                
        
        v = v.replace(/^(\d{5})(\d)/,"$1-$2") 
        
        e.target.value = v;

    })
    



        
    // cep = $(this).val().replace('01001-001', /\D/g);

    if (cep != "") {

        var validandoCEP = /^[0-9]{8}$/;

        if (validandoCEP.test(cep)) {

            $('#bairro').val("...");
            $('#cidade').val("...");
            $('#estado').val("...");
            $('#rua').val("...");
            $('#ibge').val("...");
            $('#ddd').val("...");
            $('#gia').val("...");
            $('#siafi').val("...");



            $.getJSON("https://viacep.com.br/ws/" + cep + "/json/?callback=?", function (dados) {

                if (!("erro" in dados)) {
                    //Atualiza os campos com os valores da consulta.

                    $('#bairro').val(dados.bairro);
                    $('#cidade').val(dados.localidade);
                    $('#estado').val(dados.uf);
                    $('#rua').val(dados.logradouro);
                    $('#ibge').val(dados.ibge);
                    $('#ddd').val(dados.ddd);
                    $('#gia').val(dados.gia);
                    $('#siafi').val(dados.siafi);
                }
                else {
                    //CEP pesquisado não foi encontrado.
                    sweetError();
                }
            });
        }
        else {
            //cep é inválido.
                    sweetError();
        }
    }
});



