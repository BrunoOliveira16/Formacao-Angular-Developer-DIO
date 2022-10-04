// Função utilizada no arquivo Index
function obterMedia(){

    var a = parseInt(document.getElementById("a").value);
    var b = parseInt(document.getElementById("b").value);
    var c = parseInt(document.getElementById("c").value);

    var media = (a + b +c)/3;

    document.getElementById("resultado").innerHTML = "Resultado: " + media;

    console.log(a + b + c);
}

function MediaNota(){
    var N1 = parseInt(document.getElementById("N1").value);
    var N2 = parseInt(document.getElementById("N2").value);
    var N3 = parseInt(document.getElementById("N3").value);
    var N4 = parseInt(document.getElementById("N4").value);

    var media = (N1 + N2 + N3 + N4)/4;

    if(media >=7) {
        resultado = "aprovado";
    } else {
        resultado = "reprovado";
    }
    
    document.getElementById("exibicao").innerHTML = "Media: " + media + " - " + resultado;
}


function calcularMedia( notas ) {

    let soma = 0;
    for( c = 0; c < notas.length; c++) {
        soma += notas[c];
    }

    media = soma / notas.length;

    return media;

}

let media; // escopo global

function aprovacao( notas ) {

    let media = calcularMedia( notas ); // escopo da função

    let condicao = media >= 8 ? "aprovado" : "reprovado";

    return 'Média: ' + media + ' - Resultado: ' + condicao;

}


// Função Recursivas

function contagemRegressiva(numero){

    console.log(numero);  
    
    let proximoNumero = numero - 1;

    if(proximoNumero > 0)
        contagemRegressiva(proximoNumero);

}

// contagemRegressiva(50);
document.addEventListener('submit', function(evento){

    evento.preventDefault();
    evento.stopImmediatePropagation(); // só posso controlar o evento apartir do listener

    let formulario = document.getElementById('formulario-00'); //chamando o formulario
    let dados = new FormData(formulario); // metodo para capturar dados
    let objeto = {}; // toda vez que os dados forem submetidos ela sera zerada
    let notas = [];

    for (let key of dados.keys()){
        objeto [key] = dados.get(key); //laço para pegar os valores do objeto
                                      // a key serve para obter os dados
        notas.push( parseInt(dados.get(key))); // metodo para adicionar itens no array
    }                                 

    console.log(notas);
    console.log(objeto); // somente para visualizar no console oque acontece

    document.getElementById('resultado').innerHTML = aprovacao(notas)
    
});

