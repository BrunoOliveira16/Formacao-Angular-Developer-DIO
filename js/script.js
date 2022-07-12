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

// Script para cálculo de média com estrutura de repetição //

var alunos =  [
    [6, 7, 8, 7]
    [5, 6, 8, 5]
    [10, 9, 10, 10]
    [8, 7, 9, 9]
]

var nota = 0

for (var i = 0; i = alunos.length; i++){

    nota = 0
    notasAluno = alunos[i]
    console.log("Aluno: " + parseInt(i+1));
    console.log("Nota: " + notasAluno);

    for(c = 0; c < notasAluno.length; c++){
        nota += notasAluno[c];
    }

    media = nota / 4;

    if(media >=7){
        resultado = "Aprovado";
    } else {
        resultado = "Reprovado";
    }

    console.log("Media: " + media + " - " + resultado)
}