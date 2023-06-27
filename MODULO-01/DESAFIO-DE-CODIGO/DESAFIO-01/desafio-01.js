const { gets, print } = require('./auxiliar');

let nomes = new Array()

for(let i = 0; i < 10; i++) {
    nomes[i] = gets();
}

print(nomes[2]);
print(nomes[6]);
print(nomes[8]);