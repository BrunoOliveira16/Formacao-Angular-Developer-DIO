## 📝 Aula 02: TypeScript para Angular
### Class Decorators
Um class decorator é um tipo de decorator em TypeScript que pode ser aplicado a uma classe para adicionar ou modificar seu comportamento. Ele é definido como uma função que recebe um único argumento: o construtor da classe a ser decorada. Dentro do corpo da função decorator, você pode modificar a classe de várias maneiras, como adicionar novas propriedades ou métodos, sobrescrever métodos existentes ou alterar o comportamento do construtor.

O exemplo que você forneceu ilustra como criar e usar um class decorator em TypeScript. O código define um class decorator chamado ``apiVersion`` que recebe um argumento ``version`` representando a versão da API. O decorator retorna uma função que recebe o construtor da classe como argumento e usa o método Object.assign para adicionar uma nova propriedade ``__version`` ao protótipo da classe com o valor de ``version``.

```
function apiVersion(version: string) {
    return (target: any) => {
        Object.assign(target.prototype, {__version: version})
    };
}

@apiVersion("1.10")
class Api {}

const api = new Api();
console.log(api.__version);
```

Em seguida, o decorator ``apiVersion`` é aplicado à classe Api usando a sintaxe de decorator ``(@apiVersion("1.10"))`` antes da declaração da classe. Isso chama o decorator ``apiVersion`` com o argumento "1.10" representando a versão da API e aplica o decorator à classe Api. Como resultado, a classe Api agora possui uma nova propriedade ``__version`` com o valor ``"1.10"``.

No final do código, criamos um novo objeto da classe Api e acessamos sua propriedade ``__version``. Isso imprime o valor ``"1.10"`` no console, indicando que a versão da API foi adicionada à classe pelo decorator.

Este exemplo ilustra como os class decorators podem ser usados para adicionar novas propriedades a uma classe em TypeScript. Neste caso, o decorator adiciona uma propriedade de versão à classe, mas os decorators podem ser usados para adicionar muitos tipos diferentes de comportamentos a classes.