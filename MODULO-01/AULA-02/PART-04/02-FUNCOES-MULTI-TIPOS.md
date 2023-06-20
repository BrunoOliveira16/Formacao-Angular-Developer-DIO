## 📝 Aula 02: TypeScript para Angular
### Funções Multi Tipos
Em TypeScript, você pode criar funções que aceitam ou retornam valores de diferentes tipos usando uniões de tipos. Uma união de tipos é criada usando a sintaxe ``tipo1 | tipo2 | tipo3`` e representa um valor que pode ser de qualquer um dos tipos especificados.

Para criar uma função que aceita valores de diferentes tipos como parâmetros, você pode especificar o tipo dos parâmetros como uma união de tipos. Por exemplo, para criar uma função ``concatenar`` que aceita dois parâmetros ``x`` e ``y`` que podem ser strings ou números, você pode usar a seguinte sintaxe:

```
function concatenar(x: string | number, y: string | number): string {
    return x.toString() + y.toString();
}
```

Neste exemplo, os parâmetros ``x`` e ``y`` são declarados como sendo do tipo ``string | number``, o que significa que eles podem ser strings ou números. A função ``concatenar`` é definida para retornar a concatenação das representações em string dos valores de ``x`` e ``y``.

<br>

Você também pode criar uma função que retorna valores de diferentes tipos especificando o tipo de retorno da função como uma união de tipos. Por exemplo, para criar uma função ``obterValor`` que retorna um valor do tipo ``string`` ou ``number``, você pode usar a seguinte sintaxe:

```
function obterValor(): string | number {
    // ...
}
```

Neste exemplo, o tipo de retorno da função ``obterValor`` é especificado como ``string | number``, o que significa que a função pode retornar um valor do tipo string ou number. Quando você chama uma função que retorna uma união de tipos, deve ter cuidado para lidar com todos os possíveis tipos de valores que a função pode retornar.