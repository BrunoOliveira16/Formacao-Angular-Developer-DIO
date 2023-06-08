## 📝 Aula 01: Trabalhando com Web Components no Front-end
### Entendendo a Shadow DOM
O Shadow DOM é uma tecnologia do navegador projetada para permitir a criação de componentes que contêm aparência e comportamento sem influenciar os demais elementos ao seu redor, escondendo sua estrutura. Ele permite que você crie elementos que possuem estrutura, estilo e comportamento encapsulados, de modo que o JavaScript e o CSS de um componente não corram o risco de afetar outro componente.

Basicamente, a diferença entre o Shadow DOM e o DOM comum é o encapsulamento.

Aqui está um exemplo simples de como usar o Shadow DOM:
```
<template id="my-component">
  <style>
    p {
      color: blue;
    }
  </style>
  <p>Este é um componente com Shadow DOM!</p>
</template>

<div id="container"></div>

<script>
  const template = document.querySelector('#my-component');
  const container = document.querySelector('#container');

  const shadowRoot = container.attachShadow({ mode: 'open' });
  shadowRoot.appendChild(template.content.cloneNode(true));
</script>
```

Neste exemplo, estamos criando um template para o nosso componente com Shadow DOM. O template contém um estilo que define a cor do texto de todos os elementos ``<p>`` como azul e um elemento ``<p>`` com algum conteúdo de texto.

Em seguida, estamos selecionando o elemento #container e anexando um Shadow DOM a ele usando o método attachShadow com a opção mode definida como 'open'. Isso nos permite acessar o Shadow DOM do elemento #container através da propriedade shadowRoot.

Por fim, estamos clonando o conteúdo do nosso template e adicionando-o ao Shadow DOM do elemento #container usando o método appendChild.