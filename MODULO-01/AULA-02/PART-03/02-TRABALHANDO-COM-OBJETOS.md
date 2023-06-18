## 📝 Aula 02: TypeScript para Angular
### Trabalhando com Objects
Em TypeScript, você pode trabalhar com objetos de duas maneiras: usando o tipo object para objetos sem previsibilidade de propriedades ou criando um tipo personalizado para objetos com previsibilidade de propriedades.

<br>

### Objeto - sem previsibilidade
No primeiro exemplo, a variável cliente é declarada como sendo do tipo object e é inicializada com um objeto vazio. Isso significa que a variável cliente pode armazenar qualquer objeto, independentemente das propriedades que ele possua. No entanto, como o tipo object não fornece informações sobre as propriedades do objeto, você não pode acessar as propriedades do objeto diretamente sem primeiro fazer uma verificação de tipo.
```
let cliente:object = {}

cliente: object = {
    name: "Bruno",
    cidade: "RJ",
    idade: 30
};
```

<br>

### Objeto Tipado - com previsibilidade
No segundo exemplo, criamos um tipo personalizado chamado ProdutoLoja usando a palavra-chave type. Esse tipo define a estrutura de um objeto com as propriedades nome, preco e unidades dos tipos string, number e number, respectivamente. Depois de definir o tipo ProdutoLoja, declaramos uma variável produto do tipo ProdutoLoja e a inicializamos com um objeto que segue a estrutura definida pelo tipo ProdutoLoja.
```
type ProdutoLoja = {
    nome: string;
    preco: number;
    unidades: number;
};

let produto: ProdutoLoja = {
    nome: "Tênis",
    preco: 89.99,
    unidades: 5
};
```
Ao criar um tipo personalizado para um objeto, você informa ao compilador TypeScript a estrutura exata do objeto e permite que ele verifique se o objeto está correto em tempo de compilação. Isso também permite que você acesse as propriedades do objeto diretamente sem precisar fazer verificações de tipo adicionais.