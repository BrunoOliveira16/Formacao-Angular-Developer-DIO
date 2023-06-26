## 📝 Aula 02: TypeScript para Angular
### Attribute Decorator
Um attribute decorator é um tipo de decorator em TypeScript que pode ser aplicado a uma propriedade de classe para adicionar ou modificar seu comportamento. Ele é definido como uma função que recebe dois argumentos: o objeto que contém a propriedade e o nome da propriedade. Dentro do corpo da função decorator, você pode modificar a propriedade de várias maneiras, como adicionar validação ou alterar seu comportamento de acesso.

O exemplo abaixo ilustra como criar e usar um ``attribute decorator`` em TypeScript. O código define um ``attribute decorator`` chamado ``minLength`` que recebe um argumento ``length`` representando o comprimento mínimo da propriedade. O decorator retorna uma função que recebe o objeto e o nome da propriedade como argumentos e usa o método ``Object.defineProperty`` para definir um ``getter`` e um ``setter`` personalizados para a propriedade.

```
function minLength(length: number) {
    return (target: any, key: string) => {
        let _value = target[key];

        const getter = () => "[valor]" + _value;
        const setter = (value: string) => {
            if(value.length < length) {
                throw new Error(`Tamanho menor do que ${length}`);
            } else {
                _value = value;
            }
        };

        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
        });
    };
}

class Api {
    @minLength(3)
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

const api = new Api("produtos");
console.log(api.name);
```

O getter personalizado simplesmente retorna o valor da propriedade precedido pela string ``"[valor]"``. O setter personalizado verifica se o valor passado é menor do que o comprimento mínimo especificado e, se for, lança um erro. Caso contrário, ele atribui o valor à propriedade.

Em seguida, o decorator minLength é aplicado à propriedade ``name`` da classe ``Api`` usando a sintaxe de decorator ``(@minLength(3))`` antes da declaração da propriedade. Isso chama o decorator minLength com o argumento 3 representando o comprimento mínimo da propriedade e aplica o decorator à propriedade ``name``. Como resultado, a propriedade ``name`` agora possui um getter e um setter personalizados que adicionam validação de comprimento mínimo.

No final do código, criamos um novo objeto da classe ``Api`` e acessamos sua propriedade ``name``. Isso chama o getter personalizado da propriedade e imprime o valor ``"produtos"`` no console precedido pela string ``"[valor]"``. Se tentássemos atribuir um valor com menos de 3 caracteres à propriedade ``name``, isso chamaria o setter personalizado e lançaria um erro indicando que o tamanho é menor do que 3.

Este exemplo ilustra como os attribute decorators podem ser usados para adicionar validação a uma propriedade de classe em TypeScript. Neste caso, o decorator adiciona validação de comprimento mínimo à propriedade, mas os decorators podem ser usados para adicionar muitos tipos diferentes de comportamentos a propriedades de classe.