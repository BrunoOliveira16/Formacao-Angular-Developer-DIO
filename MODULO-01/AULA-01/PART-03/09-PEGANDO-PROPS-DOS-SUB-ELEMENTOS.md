## 📝 Aula 01: Trabalhando com Web Components no Front-end
### Pegando as Props dos sub elementos do component
Nesta estapa adicionamos os atributos para tag's ``<a>`` e ``<img>`` de forma dinâmica;
```
const linkTitle = document.createElement("a");
linkTitle.textContent = this.getAttribute("title");
linkTitle.href = this.getAttribute("link-url");

const newsImage = document.createElement("img");
newsImage.src = this.getAttribute("photo") || "./images/foto-default.jpg";
newsImage.alt = this.getAttribute("alt-photo") || "foto default";
cardRight.appendChild(newsImage);
```
Note que adicionamos uma condição para caso seja passado parâmetro dentro da propriedade ou não, e assim ficou no HTML a tag com seus novos atributos:
```
<card-news
    autor="Bruno Oliveira"
    title="Darth Vader Contrata Devs"
    link-url="#"
    content="Darth Vader procura desenvolvedores que sabem trabalhar com componentes"
    photo="./images/asset-vader.png"
    alt-photo="imagem do darth vader"
></card-news>

<card-news></card-news>
```

Todo o conteúdo está localizado na pasta ``web-component`` que pode ser acessada <a href="../web-component">clicando aqui</a>.