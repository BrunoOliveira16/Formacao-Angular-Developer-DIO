// REFATORAÇÃO UTILIZANDO ARROWS FUNCTIONS

// function obterMedia(){
// Escrevendo a mesma função com uma arrow function    
const obterMedia = (a, b, c) => {

    let a = parseInt(document.getElementById("a").value);
    let b = parseInt(document.getElementById("b").value);
    let c = parseInt(document.getElementById("c").value);

    let media = (a + b +c)/3;

    document.getElementById("resultado").innerHTML = "Resultado: " + media;

    console.log(a + b + c);
}

