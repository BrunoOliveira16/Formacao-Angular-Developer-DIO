## 📝 Aula 02: TypeScript para Angular
### Trabalhando com Arrays de Multi Types
Em TypeScript, você pode criar arrays que podem armazenar valores de diferentes tipos usando uniões de tipos. Uma união de tipos é criada usando a sintaxe ``tipo1 | tipo2 | tipo3`` e representa um valor que pode ser de qualquer um dos tipos especificados.

No exemplo abaixo, a variável ``infos`` é declarada como sendo um array de valores do tipo ``string | number``. Isso significa que a variável ``infos`` pode armazenar um array de valores que podem ser strings ou números. A variável ``infos`` é inicializada com um array que contém uma string e um número.

Depois de declarar uma variável como sendo um array de uma união de tipos, você pode atribuir um array de valores desses tipos à variável. Você também pode acessar os elementos do array e modificar seus valores como faria com qualquer outro array em JavaScript. No entanto, ao acessar os elementos do array, você deve ter cuidado para lidar com todos os possíveis tipos de valores que o elemento pode ter.
```
let infos:(string | number)[] = ["Bruno", 30];
```