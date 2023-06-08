## 📝 Aula 01: Trabalhando com Web Components no Front-end
### Entendendo a DOM
O Document Object Model (DOM) é uma interface de programação para os documentos HTML e XML. Ele representa a página de forma que os programas possam alterar a estrutura do documento, alterar o estilo e conteúdo. O DOM representa o documento com nós e objetos, dessa forma, as linguagens de programação podem se conectar à página.

### Como acessar o DOM
Você pode acessar o DOM com JavaScript através do objeto document, que é responsável por conceder ao código JavaScript todo o acesso à árvore DOM do navegador Web. Portanto, qualquer coisa criada pelo navegador Web no modelo da página Web poderá ser acessada através do objeto JavaScript document.

Através do objeto document, você pode ter acesso a um grande número de propriedades, como documentElement, getElementById, createElement, createAttribute, createTextNode, getElementsByTagName, appendChild, removeChild e parentNode.

Aqui está um exemplo simples de como acessar o DOM com JavaScript:
```
// Acessando um elemento pelo seu ID
let element = document.getElementById('myElement');

// Alterando o conteúdo de texto do elemento
element.textContent = 'Novo conteúdo de texto!';

// Alterando o estilo do elemento
element.style.color = 'blue';
```

Neste exemplo, estamos acessando um elemento pelo seu ID usando o método getElementById do objeto document. Em seguida, estamos alterando o conteúdo de texto do elemento usando a propriedade textContent. Por fim, estamos alterando o estilo do elemento, mudando a cor do texto para azul usando a propriedade style.