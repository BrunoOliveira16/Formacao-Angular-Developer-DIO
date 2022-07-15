# Exercicio 01 - Módulo 13

10 + 15 = 25 (number)
"10" + 2 = "102" (string)
"10" * 2 = 20 (number)
"10" / 3 = 3,333333333333333 (Float)
"10" % 3 = 1 (number)
10 + true = 11 (number)
10 == "10" = true (boolean)
10 === "10" = false (boolean)
10 < 11 = true (boolean)
10 > 12 = false (boolean)
10 <= 10.1 = true (boolean)
10 > 9.99 = true (boolean)
10 != "dez" = true (boolean)
10 + true = 11 (number)
"dez" + true = "deztrue" (string)
10 + false = 10 (number)
10 * false = 0 (number)
true + true = 2 (number)
10++ = 11 (number) 
10-- = 9 (number)
1 & 1 = 1 (boolean)
1 & 0 = 0 (boolean)
0 & 0 = 0 (boolean)
1 & 0 = 0 (boolean)
0 / 1 = 0 (number)
5 + 5 == 10 = true (boolean)
"5" + "5" == 10 = false (boolean)
"5" * 2 > 9 = true (boolean)
(10 + 10) * 2 = 40 (number)
10 + 10 * 2 = 30 (number)

# Exercicio 02 - Módulo 13

var branco = “preto”;
var preto = “cinza”;
var cinza = “branco”;
var carro = “preto”;
var valor = 30000;
var prestacao = 750;

a) branco == “branco”
- false (o valor da váriavel branco é diferente de "branco" logo a condição lógica é false)

b) branco == cinza
False (as variaveis não possuem igualdade nos valores pois a var branco = "preto" e a var cinza = "branco")

c) carro === branco
- True (a variavel carro possui o mesmo valor e tipo que a variavel branco. "preto")

d) var cavalo = carro == “preto” ? “cinza” : “marron”;
- True ( logo o valor será "cinza", pois a variavel cavalo == carro que possui o valor atribuido "preto", logo satisfazendo a condição lógica verdadeira)

e) Quantas prestações são necessárias para pagar o valor do carro com uma entrada
de 3.000? Demonstre a operação.
- var entrada = 3000
- (var valor - var entrada) / var prestacao
- (30000 - 3000) / 750
- 36 prestações

f) Somando as variáveis de cores é formada uma string de quantos caracteres?
- var preto + var cinza + var branco = "pretocinzabranco"
- Total: 16 caracteres