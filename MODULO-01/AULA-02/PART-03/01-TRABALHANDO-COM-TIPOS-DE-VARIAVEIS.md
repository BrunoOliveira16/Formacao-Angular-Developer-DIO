## 📝 Aula 02: TypeScript para Angular
### Trabalhando com tipos de Variáveis
Em TypeScript, você pode especificar o tipo de uma variável ao declará-la usando a sintaxe ``let variavel: tipo`` ou ``const variavel: tipo``. Isso informa ao compilador TypeScript o tipo de valor que a variável pode armazenar e permite que o compilador verifique se você está atribuindo valores do tipo correto à variável.

Por exemplo, você pode declarar uma variável idade do tipo number da seguinte maneira:
```
let idade: number;
```

Depois de declarar a variável idade como sendo do tipo number, você pode atribuir valores numéricos a ela sem problemas:
```
idade = 30;
```

No entanto, se você tentar atribuir um valor de um tipo diferente, como uma string, o compilador TypeScript emitirá um erro:
```
idade = "trinta"; // Erro: Type 'string' is not assignable to type 'number'.
```

<br>

### Tipos primitivos: boolean, string e number
Em TypeScript, os tipos primitivos boolean, string e number representam valores booleanos (verdadeiro ou falso), strings (sequências de caracteres) e números (valores numéricos), respectivamente.

No exemplo abaixo, as variáveis ligado, nome, idade e altura são declaradas com os tipos boolean, string, number e number, respectivamente. Isso significa que a variável ligado pode armazenar apenas valores booleanos (verdadeiro ou falso), a variável nome pode armazenar apenas strings, e as variáveis idade e altura podem armazenar apenas valores numéricos.

Ao especificar o tipo de uma variável, você informa ao compilador TypeScript o tipo de valor que a variável pode armazenar. Isso permite que o compilador verifique se você está atribuindo valores do tipo correto à variável e avise se você tentar atribuir um valor de um tipo incompatível. Por exemplo, se você tentar atribuir uma string à variável ligado, o compilador TypeScript emitirá um erro porque a variável ligado foi declarada como sendo do tipo boolean.
```
let ligado: boolean = false;
let nome: string = "Bruno";
let idade: number = 30;
let altura: number = 1.87;
```

<br>

### Tipos especiais null e undefined
Em TypeScript, null e undefined são tipos especiais que têm apenas um valor possível cada: null e undefined, respectivamente. Esses valores são usados para representar a ausência de um valor ou um valor não inicializado.

No exemplo abaixo, as variáveis nulo e indefinido são declaradas com os tipos null e undefined, respectivamente, e são inicializadas com os valores null e undefined. Isso significa que a variável nulo pode armazenar apenas o valor null e a variável indefinido pode armazenar apenas o valor undefined.

Na prática, é raro declarar variáveis com os tipos null ou undefined, pois esses valores geralmente são usados como parte de uniões de tipos para representar a possibilidade de uma variável não ter um valor. Por exemplo, você pode ter uma variável do tipo string | null para representar uma string que pode ser nula.
```
let nulo: null = null;
let indefinido: undefined = undefined;
```

<br>

### Tipos abrangentes any e void
Em TypeScript, any e void são tipos abrangentes que representam qualquer valor e nenhum valor, respectivamente.

O tipo any é usado para representar um valor de qualquer tipo. Quando você declara uma variável como sendo do tipo any, você está informando ao compilador TypeScript que a variável pode armazenar um valor de qualquer tipo e que você não deseja que o compilador verifique o tipo de valor atribuído à variável. No exemplo abaixo, a variável retornoView é declarada como sendo do tipo any e é inicializada com o valor false. Isso significa que a variável retornoView pode armazenar um valor de qualquer tipo e que você pode atribuir valores de diferentes tipos a ela sem que o compilador TypeScript emita erros.

O tipo void é usado principalmente como o tipo de retorno de funções que não retornam um valor. Quando uma função é declarada como tendo um tipo de retorno void, isso significa que a função não retorna um valor e que qualquer tentativa de usar o valor retornado pela função resultará em um erro. No exemplo abaixo, a variável retorno é declarada como sendo do tipo void, mas não é inicializada com nenhum valor. Isso significa que a variável retorno não pode armazenar nenhum valor e qualquer tentativa de atribuir um valor a ela resultará em um erro.
```
let retorno:void
let retornoView: any = false 
```