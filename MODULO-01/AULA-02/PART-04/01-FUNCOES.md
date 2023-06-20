## 📝 Aula 02: TypeScript para Angular
### Funções
Em TypeScript, uma função é um bloco de código que pode ser chamado por seu nome e pode receber parâmetros e retornar um valor. Você pode especificar o tipo dos parâmetros e do valor de retorno de uma função para garantir que a função seja chamada com os argumentos corretos e retorne um valor do tipo esperado.

Em TypeScript, você pode especificar o tipo dos parâmetros e retorno de uma função ao declará-la. Para fazer isso, basta adicionar o tipo do parâmetro após o nome do parâmetro, separado por dois pontos (:) e Para o tipo de retorno adicione (:) após a lista de parâmetros da função.

Por exemplo, para declarar uma função addNumber que recebe dois parâmetros x e y do tipo number e retorna um number, você pode usar a seguinte sintaxe:

```
function addNumber(x: number, y:number): number {
    return x + y;
}
```
Neste exemplo, os parâmetros x e y são declarados como sendo do tipo number. Isso significa que a função addNumber deve ser chamada com dois argumentos numéricos. Se você tentar chamar a função com argumentos de um tipo diferente, o compilador TypeScript emitirá um erro.

Você pode especificar o tipo de qualquer parâmetro de uma função usando essa sintaxe. Além dos tipos primitivos como number e string, você também pode usar tipos mais complexos como objetos, uniões de tipos e tuplas para especificar o tipo dos parâmetros de uma função.

