## 📝 Aula 02: TypeScript para Angular
### Utilizando Generics na prática
Este é um exemplo de uma função genérica chamada ``concatArray`` que usa o tipo genérico ``T`` para concatenar vários arrays do mesmo tipo e retornar um novo array com todos os elementos.

```
function concatArray<T>(...itens: T[]): T[] {
    return new Array().concat(...itens);
}

const numArray = concatArray<number[]>([1, 5], [3], [2, 4, 6]);
const stgArray = concatArray<string[]>(["Bruno", "Bianca"], ["Bernardo"]);

console.log(numArray);
console.log(stgArray);
```

Dentro da função, usamos o método concat do objeto Array para concatenar todos os arrays passados como argumentos. Observe que usamos a sintaxe de propagação ``(...itens)`` para passar todos os arrays como argumentos separados para o método concat.

No final do código, a função concatArray é chamada duas vezes com diferentes tipos de arrays: uma vez com arrays de números e outra vez com arrays de strings. O tipo genérico T é especificado explicitamente ao chamar a função ``(concatArray<number[]> e concatArray<string[]>)`` para indicar ao compilador TypeScript qual é o tipo dos arrays que estão sendo passados como argumentos.

O resultado é que a variável numArray contém um array de números concatenado ``([1, 5, 3, 2, 4, 6])`` e a variável stgArray contém um array de strings concatenado ``([“Bruno”, “Bianca”, “Bernardo”])``