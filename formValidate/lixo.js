
const cep = document.querySelector("#cep");

let bairro = document.querySelector('#bairro')
let cidade= document.querySelector('#cidade')
let estado = document.querySelector('#estado')
let rua = document.querySelector('#rua')
let ibge = document.querySelector('#ibge')
let ddd = document.querySelector('#ddd')
let gia = document.querySelector('#gia')
let siafi = document.querySelector('#siafi')

function viaCEP(){      
cep.addEventListener('blur', e=> {
    
    const value = $(this).val().replace(/\D/g, '');
    
    cep.value == '35300-000';

    const validacaoBruta = /^[0-9]{8}$/;

    const api = `https://viacep.com.br/ws/${value}/json/?callback=?`;

    fetch(api)
    .then( response => response.json())
    .then( json => {
       
        if( json ) {
                bairro.value = json.bairro;
                cidade.value = json.localidade;
                estado.value = json.uf;
                rua.value = json.logradouro;
                ibge.value = json.ibge;
                ddd.value = json.ddd;
                gia.value = json.gia;
                siafi.value = json.siafi;
          }
    });
    viaCEP();
})
}


// function limparCampos(){
//     cep.value = ('');
//     bairro.value = ('');
//     cidade.value = ('');
//     estado.value = ('');
//     rua.value = ('');
//     ibge.value = ('');
//     ddd.value = ('');
//     gia.value = ('');
//     siafi.value = ('');
// }



// let btoLimpar = document.getElementById('#btnLimpar').addEventListener(()=>{
//     // limparCampos();
// })





// var url = "https://viacep.com.br/ws/"+cep+"/json";

// $.ajax({
//     url: url,
//     type: "get",
//     dataType: "json",

//     success:function(dados){
//         $("#estado").val(dados.uf);
//         $("#cidade").val(dados.localidade);
//         $("#bairro").val(dados.bairro);
//         $("#rua").val(dados.logradouro);
//         $("#ibge").val(dados.ibge);
//         $("#ddd").val(dados.ddd);
//     }
// });