## 📝 Aula 01: Trabalhando com Web Components no Front-end
### Construindo as Props do card news
Nesta etapa vamos adicionar atributos a nossa tag:
```
const autor = document.createElement("span");
autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous");

const linkTitle = document.createElement("a");
linkTitle.textContent = this.getAttribute("title");

const newsContent = document.createElement("p");
newsContent.textContent = this.getAttribute("content");
```

No documento HTML atribuimos os valores para os atributos criados dentro da tag:
```
<card-news
    autor="Bruno Oliveira"
    title="Darth Vader Contrata Devs"
    content="Darth Vader procura desenvolvedores que sabem trabalhar com componentes"
></card-news>
```

Todo o conteúdo está localizado na pasta ``web-component`` que pode ser acessada <a href="../web-component">clicando aqui</a>.