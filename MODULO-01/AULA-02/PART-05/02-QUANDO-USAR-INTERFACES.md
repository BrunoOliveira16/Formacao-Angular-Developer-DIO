## 📝 Aula 02: TypeScript para Angular
### Quando usar interfaces
Em TypeScript, as interfaces são usadas principalmente para definir a estrutura de objetos e garantir que os objetos sigam uma determinada estrutura. As interfaces são úteis quando você deseja criar um contrato para a forma como os dados devem ser estruturados ou para garantir que diferentes partes do seu código usem objetos com a mesma estrutura.

Algumas situações em que você pode querer usar interfaces incluem:

- Definir a estrutura de objetos que são passados como argumentos para funções ou retornados por funções. Isso permite que você garanta que as funções recebam e retornem objetos com a estrutura correta.

- Definir a estrutura de objetos que são armazenados em arrays ou outras estruturas de dados. Isso permite que você garanta que todos os objetos no array tenham a mesma estrutura.

- Criar hierarquias de tipos mais complexas usando herança de interface. Isso permite que você crie interfaces que estendem outras interfaces e definem propriedades adicionais ou sobrescrevem propriedades existentes.

- Garantir que as classes implementem uma determinada interface. Isso permite que você crie classes que devem implementar um conjunto específico de métodos e propriedades definidos pela interface.

Em geral, é uma boa prática usar interfaces sempre que você deseja definir a estrutura de um objeto e garantir que diferentes partes do seu código usem objetos com a mesma estrutura. Isso torna seu código mais legível e fácil de entender e ajuda a evitar erros em tempo de compilação.

Exemplo:

```
interface robot {
    readonly id: number | string;
    nome: string;
    sayHello(): string;
}

class Pessoa implements robot {
    id: number | string;
    nome: string;

    constructor(id: number | string, nome: string) {
        this.id = id;
        this.nome = nome;
    }

    sayHello(): string {
        return `Hello i'm ${this.nome}`;
    }
}

const p = new Pessoa(1, "gutsman")
console.log(p.sayHello());
```

Este é um exemplo de TypeScript que demonstra o uso de interfaces e classes. A interface ``robot`` define um contrato para objetos que implementam essa interface. Ela especifica que um objeto deve ter uma propriedade ``id`` somente leitura do tipo ``number`` ou ``string``, uma propriedade nome do tipo string e um método ``sayHello`` que retorna uma string.

A classe ``Pessoa`` implementa a interface ``robot``, o que significa que ela deve seguir o contrato definido pela interface. A classe possui uma propriedade ``id``, uma propriedade nome e um método ``sayHello``. O método ``sayHello`` retorna uma string que diz “Hello i’m” seguido pelo valor da propriedade nome.

No final do código, é criada uma instância da classe ``Pessoa`` com o ``id`` 1 e o nome “gutsman”. Em seguida, é chamado o método ``sayHello`` dessa instância e o resultado é impresso no console.