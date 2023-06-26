## 📝 Aula 02: TypeScript para Angular
### SubClasses
Subclasses são classes que herdam propriedades e métodos de uma classe base. Isso permite que você crie uma nova classe a partir de uma classe existente, adicionando ou modificando funcionalidades. Em TypeScript, você pode criar uma subclasse usando a palavra-chave ``extends`` para estender uma classe base.

Por exemplo, vamos utilizar a nossa classe anterior ``Character`` como base:
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
```

Agora, podemos criar uma subclasse chamada ``Magician`` que herda da classe ``Character``:
```
class Magician extends Character {
    magicPoints: number;

    constructor(
        name: string, 
        strength: number, 
        skill: number, 
        magicPoints: number
        ) {
            super(name, strength, skill);
            this.magicPoints = magicPoints;
    }
}

const p2 = new Magician("Mago", 9, 30, 100);
p2.attack();
```

A classe Magician é uma subclasse da classe Character. Ela herda todas as propriedades e métodos da classe Character, incluindo name, strength, skill e o método attack.

Além disso, a classe Magician adiciona uma nova propriedade chamada magicPoints, que representa a quantidade de pontos de magia que um personagem mágico possui. O construtor da classe Magician aceita quatro argumentos: name, strength, skill e magicPoints. Ele chama o construtor da classe base usando a palavra-chave super e passando os valores de name, strength e skill. Em seguida, ele inicializa a propriedade magicPoints com o valor passado como argumento.

No final do código, um novo objeto da classe Magician é criado usando a palavra-chave new e passando os valores para o construtor. Em seguida, o método attack é chamado no objeto recém-criado.

#### Super
Super é uma palavra-chave em TypeScript (e em outras linguagens orientadas a objetos) que é usada para acessar e chamar funções na classe base de uma subclasse. É comum usar super no construtor de uma subclasse para chamar o construtor da classe base e garantir que as propriedades herdadas sejam inicializadas corretamente.

Por exemplo, na classe Magician criada anteriormente, o construtor usa super para chamar o construtor da classe base Character:
```
constructor(
    name: string, 
    strength: number, 
    skill: number, 
    magicPoints: number
) {
    super(name, strength, skill);
    this.magicPoints = magicPoints;
}
```

Neste caso, super(name, strength, skill) chama o construtor da classe Character e passa os valores de name, strength e skill como argumentos. Isso garante que essas propriedades sejam inicializadas corretamente antes de inicializarmos a propriedade adicional magicPoints.

Além de ser usado no construtor, super também pode ser usado para chamar outros métodos da classe base dentro de uma subclasse. Isso pode ser útil quando você deseja estender ou modificar o comportamento de um método herdado.