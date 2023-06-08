## 📝 Aula 01: Trabalhando com Web Components no Front-end
### Criando uma Prop
Nesta etapa iremos adicionar uma propriedade ao nosso componente, deixando ele assim dinâmico, ou seja, vamos retirar o texto anterior e criar um atributo, chamado titulo e assim passar o conteudo do titulo como um atributo, dentro da tag no documento HTML. Podendo assim aproveitarmos este mesmo componente em diferentes situações e com titulos diferentes, alterando apenas o valor do seu atributo titulo, que foi criado:
```
class TituloDinamico extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" });

        //Base do component
        const componentRoot = document.createElement('h1');
        componentRoot.textContent = this.getAttribute("titulo");

        //Estilizar o component
        const style = document.createElement('style');
        style.textContent = `
            h1 {
                color: red;
                text-align: center;
            }
        `

        //Enviar para o shadow
        shadow.appendChild(componentRoot);
        shadow.appendChild(style);
    }
}

customElements.define('titulo-dinamico', TituloDinamico);
```

Como observado a modificação realizado no código acima que criamos foi:
```
componentRoot.textContent = this.getAttribute("titulo");
```

Este trecho de código está definindo o conteúdo de texto do elemento componentRoot como o valor do atributo "titulo" do elemento personalizado.

O método getAttribute é chamado no elemento atual (this) com o argumento "titulo". Isso retorna o valor do atributo "titulo" do elemento personalizado. Esse valor é então atribuído à propriedade textContent do elemento componentRoot.

Isso significa que, ao usar o elemento personalizado em uma página HTML, você pode especificar um valor para o atributo "titulo" e esse valor será usado como o conteúdo de texto do elemento componentRoot.

Por exemplo, se você usar o elemento personalizado da seguinte maneira:
```
<titulo-dinamico titulo="Noticias do Dia"></titulo-dinamico>
```
O conteúdo de texto do elemento componentRoot será definido como "Notícias do Dia".

Todo o conteúdo está localizado na pasta ``web-component`` que pode ser acessada <a href="../web-component">clicando aqui</a>.