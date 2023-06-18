## 📝 Aula 02: TypeScript para Angular
### Trabalhando com Arrays
Em TypeScript, você pode trabalhar com arrays de duas maneiras: usando a sintaxe ``tipo[]`` ou a sintaxe ``Array<tipo>``.

No exemplo abaixo, as variáveis ``dados`` e ``dados2`` são declaradas como sendo arrays de strings usando as duas sintaxes diferentes. A variável ``dados`` é declarada usando a sintaxe ``string[]``, enquanto a variável ``dados2`` é declarada usando a sintaxe ``Array<string>``. Ambas as sintaxes são equivalentes e resultam em uma variável que pode armazenar um array de strings.

Depois de declarar uma variável como sendo um array de um determinado tipo, você pode atribuir um array de valores desse tipo à variável. No exemplo, as variáveis ``dados`` e ``dados2`` são inicializadas com um array de strings. Você também pode acessar os elementos do array e modificar seus valores como faria com qualquer outro array em JavaScript.

Além de arrays de tipos primitivos como ``string`` e ``number``, você também pode criar arrays de tipos mais complexos como objetos e uniões de tipos. Isso permite que você crie estruturas de dados mais complexas e garanta que seus valores estejam corretos em tempo de compilação.
```
let dados: string[] = ["Bruno", "Oliveira", "Bianca"];

let dados2: Array<string> = ["Bruno", "Oliveira", "Bianca"];
```