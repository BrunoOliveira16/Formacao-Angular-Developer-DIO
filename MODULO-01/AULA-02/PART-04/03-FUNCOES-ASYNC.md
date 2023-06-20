## 📝 Aula 02: TypeScript para Angular
### Funções Async
Em TypeScript, assim como em JavaScript, você pode criar funções assíncronas usando a palavra-chave ``async`` antes da palavra-chave ``function``. Uma função assíncrona sempre retorna uma ``Promise``, que é um objeto que representa um valor que pode estar disponível no futuro.

Dentro de uma função assíncrona, você pode usar a palavra-chave ``await`` para esperar que uma ``Promise`` seja resolvida antes de continuar a execução da função. Isso permite que você escreva código assíncrono de maneira mais legível e fácil de entender.

Por exemplo, para criar uma função assíncrona ``obterDados`` que busca dados de uma ``API`` e retorna o resultado como uma ``Promise``, você pode usar a seguinte sintaxe:

```
async function obterDados(url: string): Promise<any> {
    const resposta = await fetch(url);
    const dados = await resposta.json();
    return dados;
}
```

Neste exemplo, a função ``obterDados`` é declarada como sendo assíncrona usando a palavra-chave ``async``. A função recebe um parâmetro ``url`` do tipo ``string`` e retorna uma ``Promise`` que será resolvida com o resultado da chamada à ``API``. Dentro da função, a palavra-chave ``await`` é usada para esperar que as Promises retornadas pelos métodos ``fetch`` e ``json`` sejam resolvidas antes de continuar a execução da função.

> Observe que a palavra-chave await só pode ser usada dentro de uma função assíncrona. Se você tentar usar a palavra-chave await fora de uma função assíncrona, o compilador TypeScript emitirá um erro.

Depois de declarar uma função assíncrona, você pode chamá-la como faria com qualquer outra função. No entanto, como a função retorna uma Promise, você deve usar o método then da Promise ou a palavra-chave await dentro de outra função assíncrona para acessar o valor retornado pela função.