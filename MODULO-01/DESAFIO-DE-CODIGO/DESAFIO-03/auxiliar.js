const entradas = [52, 14, 18];
let i = 0;

// Função para os dados de entrada
function gets() {
    const valor = entradas[i];
    i++;
    return valor;
}

// Função para imprimir os dados de saída
function print(texto) {
    console.log(texto)
}

module.exports = { gets, print }