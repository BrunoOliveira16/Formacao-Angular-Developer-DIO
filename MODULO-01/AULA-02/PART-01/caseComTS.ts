type Hero = {
    nome: string;
    vulgo: string;
    telefone: string;
};

function ligarPara(heroi: Hero): string {
    return "ligando para: " + heroi.telefone;
}

ligarPara({
    nome: "Steve Rogers",
    vulgo: "Capitão América",
    telefone: "21 91234-4567"
});