type heroi = {
    nome: String;
    vulgo: String;
}

function printaObjeto(pessoa: heroi) {
    console.log(pessoa);
}

//Isso printa um objeto
printaObjeto({
    nome: "Bruce Wayne",
    vulgo: "Batman",
})