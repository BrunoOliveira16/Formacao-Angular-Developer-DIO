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