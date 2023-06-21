## 📝 Aula 02: TypeScript para Angular
### Como o JS lida com interfaces ou types
JavaScript é uma linguagem dinâmica e não possui o conceito de interfaces como em outras linguagens como TypeScript ou Java. No entanto, é possível simular o comportamento de interfaces usando duck typing. Duck typing é um estilo de programação em que o tipo de um objeto é determinado pelos métodos e propriedades que ele possui, em vez de ser explicitamente definido por uma classe ou interface.

O exemplo anterior que foi escrito em TypeScript, que é uma linguagem que adiciona tipos estáticos ao JavaScript. TypeScript possui o conceito de interfaces e permite definir contratos para objetos que implementam essas interfaces.

No entanto, quando o código TypeScript é compilado para JavaScript, as informações de tipo são removidas e o código resultante é puro JavaScript. Isso significa que o código JavaScript resultante não possui informações sobre interfaces ou tipos.

Aqui está o código JavaScript resultante da compilação do exemplo TypeScript que anterior:

```
class Pessoa {
    constructor(id, nome) {
        this.id = id;
        this.nome = nome;
    }
    sayHello() {
        return `Hello i'm ${this.nome}`;
    }
}
const p = new Pessoa(1, "gutsman");
console.log(p.sayHello());
```

Como podemos ver, o código JavaScript resultante não possui informações sobre a interface robot ou os tipos das propriedades e métodos. Isso significa que o código JavaScript não pode verificar se a classe Pessoa está realmente implementando a interface robot ou se está seguindo o contrato definido pela interface.

Em resumo, enquanto TypeScript possui o conceito de interfaces e tipos e permite definir contratos para objetos que implementam essas interfaces, essas informações são removidas quando o código é compilado para JavaScript. Isso significa que o código JavaScript resultante não possui informações sobre interfaces ou tipos e não pode verificar se os objetos estão seguindo os contratos definidos pelas interfaces.