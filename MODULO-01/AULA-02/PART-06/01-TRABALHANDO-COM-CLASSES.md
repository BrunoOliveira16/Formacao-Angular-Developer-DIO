## 📝 Aula 02: TypeScript para Angular
### Trabalhando com Classes
TypeScript é uma linguagem que adiciona tipos estáticos ao JavaScript e possui suporte completo para classes, assim como em outras linguagens orientadas a objetos como Java ou C#. Classes em TypeScript permitem definir a estrutura e o comportamento de objetos e podem ser usadas para criar hierarquias de herança.

Classes em TypeScript também suportam modificadores de acesso como public, private e protected, que permitem controlar a visibilidade de propriedades e métodos. Além disso, TypeScript possui suporte para construtores, métodos estáticos, propriedades estáticas e muito mais.

Exemplo:
```
// Classes
class Character {
    name: string;
    strength: number;
    skill: number;

    constructor(name: string, strength: number, skill: number){
        this.name = name;
        this.strength = strength;
        this.skill = skill;
    }

    attack(): void {
        console.log(`Attack with ${this.strength} points`);
    }
}

const p1 = new Character("Ryu", 10, 98)
p1.attack();
```

Este é um exemplo de código em TypeScript que define uma classe chamada Character. A classe possui três propriedades: name, strength e skill, todas com tipos definidos. O construtor da classe é usado para inicializar essas propriedades quando um novo objeto é criado a partir da classe. A classe também possui um método chamado attack que imprime uma mensagem no console usando a propriedade strength do objeto.

No final do código, um novo objeto Character é criado usando a palavra-chave new e passando os valores para o construtor. Em seguida, o método attack é chamado no objeto recém-criado.