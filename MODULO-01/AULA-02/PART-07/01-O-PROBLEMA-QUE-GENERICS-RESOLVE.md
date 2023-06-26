## 📝 Aula 02: TypeScript para Angular
### O Problema que o Generics resolve
Generics é um recurso em TypeScript (e em outras linguagens de programação) que permite a criação de componentes reutilizáveis que podem trabalhar com diferentes tipos de dados. Isso permite que você crie funções, classes e interfaces que podem ser usadas com diferentes tipos sem perder a segurança de tipo.

Por exemplo, imagine que você deseja criar uma função que recebe um array e retorna o primeiro elemento desse array. Sem generics, você teria que criar uma função separada para cada tipo de array:

```
function getFirstStringElement(array: string[]): string {
    return array[0];
}

function getFirstNumberElement(array: number[]): number {
    return array[0];
}
```

Com generics, você pode criar uma única função que pode trabalhar com diferentes tipos de arrays:
```
function getFirstElement<T>(array: T[]): T {
    return array[0];
}

const numbers = [1, 2, 3];
const firstNumber = getFirstElement(numbers); // 1

const strings = ["a", "b", "c"];
const firstString = getFirstElement(strings); // "a"
```

Neste exemplo, a função getFirstElement é definida usando um tipo genérico T. Esse tipo é usado para definir o tipo do parâmetro array e o tipo de retorno da função. Quando chamamos a função getFirstElement, o compilador TypeScript infere o tipo correto com base no tipo do argumento passado. Isso permite que a mesma função seja usada com diferentes tipos de arrays sem perder a segurança de tipo.

Generics também pode ser usado com classes e interfaces para criar componentes reutilizáveis que podem trabalhar com diferentes tipos de dados.