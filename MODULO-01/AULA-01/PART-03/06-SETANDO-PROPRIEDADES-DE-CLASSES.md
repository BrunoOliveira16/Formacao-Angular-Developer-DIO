## 📝 Aula 01: Trabalhando com Web Components no Front-end
### Setando Propriedades de classes
Nesta etapa iremos primeiramente adicionar ao método constructor a chamada dos métodos build e styles ao shadow DOM.
```
constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(this.build());
    shadow.appendChild(this.styles());
}
```

Agora iremos criar nossos elementos dentro do método build, e iremos adicionar classes a esses elementos com o método setAttribute:
```
build() {
    const componentRoot = document.createElement("div");
    componentRoot.setAttribute("class", "card");

    const cardLeft = document.createElement("div");
    cardLeft.setAttribute("class", "card__left");
    const cardRight = document.createElement("div");
    cardRight.setAttribute("class", "card__right");

    componentRoot.appendChild(cardLeft);
    componentRoot.appendChild(cardRight);

    return componentRoot;
}
```
Os elementos cardLeft e cardRight são então adicionados como filhos do elemento componentRoot usando o método appendChild. Por fim, o elemento componentRoot é retornado pelo método.

Todo o conteúdo está localizado na pasta ``web-component`` que pode ser acessada <a href="../web-component">clicando aqui</a>.