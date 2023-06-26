## 📝 Aula 02: TypeScript para Angular
### O principio dos decorators
Decorators são um recurso em TypeScript que permite adicionar ou modificar o comportamento de classes, métodos e propriedades. Eles fornecem uma maneira flexível de estender ou modificar a funcionalidade de um objeto sem precisar alterar seu código-fonte.

O princípio por trás dos decorators é permitir que você insira ou modifique o código em classes, métodos ou propriedades de maneira modular e reutilizável. Isso é feito através da aplicação de uma função decorator a um objeto. A função decorator recebe o objeto como argumento e retorna uma nova versão do objeto com o comportamento modificado.

Por exemplo, imagine que você tenha uma classe que representa um funcionário e deseja adicionar um recurso de validação para garantir que o nome do funcionário não esteja vazio. Em vez de alterar o código da classe diretamente, você pode criar um decorator de validação que adiciona esse comportamento à classe:

```
function ValidarNome(target: any) {
    const original = target;

    function constructor(...args: any[]) {
        if (!args[0]) {
            throw new Error("Nome não pode ser vazio");
        }
        return new original(...args);
    }

    constructor.prototype = original.prototype;
    return constructor;
}

@ValidarNome
class Funcionario {
    constructor(public nome: string) {}
}

const f1 = new Funcionario("João"); // OK
const f2 = new Funcionario(""); // Erro: Nome não pode ser vazio
```
Neste exemplo, criamos um decorator chamado ValidarNome que recebe uma classe como argumento e retorna uma nova classe com o comportamento de validação adicionado. A nova classe verifica se o primeiro argumento passado para o construtor (que representa o nome do funcionário) está vazio e, se estiver, lança um erro.

Observe que o decorator é aplicado à classe Funcionario usando a sintaxe de decorator (@ValidarNome) antes da declaração da classe. Quando o decorator é aplicado a uma classe, ele é chamado com a classe como argumento. Neste caso, o decorator ValidarNome é chamado com a classe Funcionario como argumento e retorna uma nova classe com o comportamento de validação adicionado.

Agora, quando criamos um novo objeto da classe Funcionario, ele passa pelo processo de validação adicionado pelo decorator. Se passarmos um nome vazio para o construtor, ele lançará um erro indicando que o nome não pode ser vazio.

Este exemplo ilustra como os decorators podem ser usados para adicionar comportamento a classes em TypeScript. Neste caso, o comportamento adicionado pelo decorator é validar o nome do funcionário, mas os decorators podem ser usados para adicionar muitos tipos diferentes de comportamentos a classes, métodos e propriedades.