## 📝 Aula 02: TypeScript para Angular
### Interfaces e comparação com o type
Em TypeScript, você pode usar tanto ``type`` quanto ``interface`` para criar tipos personalizados para objetos. Ambas as abordagens permitem que você defina a estrutura de um objeto especificando os nomes e tipos de suas propriedades.

No exemplo abaixo, o tipo ``robot`` é criado usando a palavra-chave ``type`` e a ``interface`` ``robot2`` é criada usando a palavra-chave ``interface``. Ambos definem a estrutura de um objeto com as propriedades id e name dos tipos number e string, respectivamente. Depois de definir o tipo ``robot`` e a ``interface`` ``robot2``, você declara uma variável bot do tipo ``robot2`` e a inicializa com um objeto que segue a estrutura definida pela interface ``robot2``.

```
type robot = {
    id: number;
    name: string;
};

interface robot2 {
    id: number,
    name: string,
}

const bot: robot2 = {
    id: 1,
    name: "megaman",
}
```
Embora ``type`` e ``interface`` possam ser usados de maneira semelhante para criar tipos personalizados para objetos, existem algumas diferenças entre eles. Uma das principais diferenças é que as interfaces podem ser estendidas e implementadas por outras interfaces e classes, enquanto os tipos não podem. Isso significa que você pode usar interfaces para criar hierarquias de tipos mais complexas e garantir que as classes implementem uma determinada interface.

Outra diferença é que as interfaces são limitadas a definir a estrutura de objetos, enquanto os tipos podem ser usados para criar ``alias`` para qualquer tipo de valor, incluindo primitivos, uniões de tipos e tuplas. Isso significa que os tipos são mais flexíveis do que as interfaces e podem ser usados em mais situações.

<br>

Neste exemplo, o tipo ``robot`` e a interface ``robot2`` são criados usando as palavras-chave ``type`` e ``interface``, respectivamente. Ambos definem a estrutura de um objeto com as propriedades id e name, onde a propriedade id é do tipo ``number | string`` e a propriedade name é do tipo string. Além disso, a propriedade id é declarada como ``readonly``, o que significa que seu valor não pode ser alterado depois que o objeto é criado.

```
type robot = {
    readonly id: number | string,
    name: string;
};

interface robot2 {
    readonly id: number | string,
    name: string,
}

const bot1: robot = {
    id: 1,
    name: "megaman",
}

const bot2: robot2 = {
    id: 1,
    name: "megaman",
}

console.log((bot1.id = 1)); #error
console.log(bot2);
```

Depois de definir o tipo ``robot`` e a interface ``robot2``, declaramos duas variáveis ``bot1`` e ``bot2`` dos tipos ``robot`` e ``robot2``, respectivamente, e as inicializa com objetos que seguem as estruturas definidas pelo tipo ``robot`` e pela interface ``robot2``.

No final do exemplo, tentamos atribuir um novo valor à propriedade ``id`` do objeto armazenado na variável ``bot1``. Isso resultará em um erro de compilação porque a propriedade ``id`` foi declarada como ``readonly``. Isso significa que você não pode alterar o valor da propriedade ``id`` depois que o objeto é criado.

Observe que o mesmo erro ocorreria se você tentasse atribuir um novo valor à propriedade ``id`` do objeto armazenado na variável ``bot2``, pois a propriedade ``id`` também foi declarada como ``readonly`` na interface ``robot2``.