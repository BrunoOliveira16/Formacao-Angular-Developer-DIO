## 📝 Aula 01: Trabalhando com Web Components no Front-end
### Definindo um Component
Nesta etapa foi criado primeiramente a estrutura de pastas e o arquivo que iremos trabalhar conforme exemplo abaixo:
```
src > components > CardNews.js
```

Dentro do arquivo ``CardNews.js`` criamos nosso primeiro componente, através do código abaixo:
```
class CardNews extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({mode: "open"});
        shadow.innerHTML = "<h1>Hello Bruno</h1>";
    }
}

customElements.define('card-news', CardNews);
```
O código acima define uma classe CardNews que estende a classe HTMLElement. Isso significa que CardNews é um elemento personalizado que pode ser usado como um elemento HTML padrão.

No construtor da classe CardNews, o método super() é chamado para invocar o construtor da classe pai HTMLElement. Em seguida, o método attachShadow é chamado no elemento atual (this) com a opção mode definida como "open". Isso cria um Shadow DOM para o elemento e retorna uma referência para a raiz do Shadow DOM.

A propriedade innerHTML da raiz do Shadow DOM é então definida como ``<h1>Hello Bruno</h1>``, o que adiciona um elemento ``<h1>`` com o texto “Hello Bruno” ao Shadow DOM do elemento.

Por fim, o método estático define da classe customElements é chamado com os argumentos 'card-news' e CardNews. Isso registra o elemento personalizado CardNews com o nome de tag 'card-news', permitindo que ele seja usado como um elemento HTML padrão com a tag ``<card-news>``.

<br>

Após a criação do componente, importamos ele no html, através do código abaixo:
```
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Web Component</title>
    <link rel="stylesheet" href="./styles/card.css">
    <script src="./src/components/CardNews.js" defer></script>
</head>
```
> Note que dentro da tag script, estamos utilizando o atributo ``defer``

O atributo defer é um atributo booleano que pode ser usado em elementos ``<script>`` que possuem o atributo ``src`` especificado. Quando presente, ele especifica que o script deve ser executado apenas depois que a página terminar de ser analisada pelo navegador.

Isso significa que o navegador irá baixar o script em paralelo com a análise da página, mas só irá executá-lo depois que a página tiver sido completamente carregada e analisada. Isso pode ser útil quando você está trabalhando com Shadow DOM e deseja garantir que todos os elementos da página estejam prontos antes de executar o script. No entanto, é importante notar que o uso do atributo defer não é específico para o Shadow DOM e pode ser útil em muitas outras situações também.

Em resumo, o atributo defer pode ser uma boa opção ao trabalhar com Shadow DOM, mas seu uso não é limitado a esse caso específico.

<br>

Após importamos o componente, colocamos nossa tag html criada ``<card-news></card-news>`` dentro do nosso documento, e a mesma exibirá na tela o texto Hello Bruno:
```
<body>
    <div class="container">...
    </div>

    <card-news></card-news>
</body>
```

Todo o conteúdo está localizado na pasta ``web-component`` que pode ser acessada <a href="../web-component">clicando aqui</a>.