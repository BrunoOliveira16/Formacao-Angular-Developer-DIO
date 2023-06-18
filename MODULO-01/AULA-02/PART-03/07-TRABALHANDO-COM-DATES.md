## 📝 Aula 02: TypeScript para Angular
### Trabalhando com Dates
Em TypeScript, você pode trabalhar com datas usando o objeto ``Date`` nativo do JavaScript. O objeto ``Date`` representa uma data e hora específicas e fornece vários métodos para manipular e exibir datas.

No exemplo abaixo, a variável aniversario é declarada como sendo do tipo ``Date`` e é inicializada com um novo objeto ``Date`` criado a partir de uma string que representa uma data e hora específicas. Depois disso, utilizamos o método toString do objeto ``Date`` para exibir a data e hora armazenadas na variável aniversario como uma string.

```
let aniversario: Date = new Date("2022-12-01 05:00");
console.log(aniversario.toString());
```

Como o objeto ``Date`` é parte do JavaScript, você pode usá-lo da mesma maneira em TypeScript. Isso significa que você pode criar, manipular e exibir datas usando os mesmos métodos e propriedades que usaria em JavaScript.