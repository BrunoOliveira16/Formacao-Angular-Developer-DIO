//Modificando function com a utilização de arrow functions
// function calcularMedia( notas ) {
const calcularMedia = (notas) => {
    let soma = 0;
    for( c = 0; c < notas.length; c++) {
        soma += notas[c];
    }

    media = soma / notas.length;

    return media;
}

let media

//function aprovacao( notas ) {
const aprovacao = (notas) => {
    let media = calcularMedia( notas );

    let condicao = media >= 8 ? "aprovado" : "reprovado";

    return 'Média: ' + media + ' - Resultado: ' + condicao;

}

//function contagemRegressiva(numero){
const contagemRegressiva = (numero) => {
    console.log(numero);  
    
    let proximoNumero = numero - 1;

    if(proximoNumero > 0)
        contagemRegressiva(proximoNumero);
}