## 📝 Aula 01: Trabalhando com Web Components no Front-end
### Construindo um Component de maneira profissional
Nesta etapa iremos de fato construir um componente de forma profissional, e iremos construir um component do nosso card de noticia, inicialmente criado diretamente no documento html, agora iremos criar um componente e no documento HTMl, utilizarmos somente nossa tag card-news e exibir o card de noticia que criamos anteriormente, com base nisso, construimos o código base abaixo:
```
class CardNews extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: "open" });
    }

    build() {}

    styles() {}
}

customElements.define('card-news', CardNews);
```
Neste código vamos utilizar 3 métodos:
- Método constructor que é aquilo que será executado primeiro;

- Método build será onde construiremos nossos elementos e toda nossa estrutura;

- Método styles é onde iremos aplicar todo nosso estilo do componente;

Todo o conteúdo está localizado na pasta ``web-component`` que pode ser acessada <a href="../web-component">clicando aqui</a>.