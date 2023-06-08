## 📝 Aula 01: Trabalhando com Web Components no Front-end
### Construindo o build do seu component
Nesta etapa, damos continuidade na construção dos elementos, dentro de ``card__left`` e ``card__right``:
```
const autor = document.createElement("span");
const linkTitle = document.createElement("a");
const newsContent = document.createElement("p");

cardLeft.appendChild(autor);
cardLeft.appendChild(linkTitle);
cardLeft.appendChild(newsContent);

const newsImage = document.createElement("img");
cardRight.appendChild(newsImage);
```
Primeiro, três elementos são criados usando o método document.createElement: um elemento ``<span>``, um elemento ``<a>`` e um elemento ``<p>``. Esses elementos são armazenados nas variáveis autor, linkTitle e newsContent, respectivamente.

Em seguida, os elementos autor, linkTitle e newsContent são adicionados como filhos do elemento cardLeft usando o método appendChild.

Um elemento ``<img>`` também é criado usando o método document.createElement e armazenado na variável newsImage. Esse elemento é adicionado como filho do elemento cardRight usando o método appendChild.

Em resumo, esse trecho de código está criando vários elementos HTML e adicionando-os como filhos dos elementos cardLeft e cardRight.

Todo o conteúdo está localizado na pasta ``web-component`` que pode ser acessada <a href="../web-component">clicando aqui</a>.