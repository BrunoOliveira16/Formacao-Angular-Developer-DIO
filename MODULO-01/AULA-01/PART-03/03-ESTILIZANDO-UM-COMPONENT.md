## 📝 Aula 01: Trabalhando com Web Components no Front-end
### Estilizando um Component
Nesta etapa criamos um component estilizado chamado ``<titulo-dinamico>``, através do código abaixo:
```
class TituloDinamico extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" });

        //Base do component
        const componentRoot = document.createElement('h1');
        componentRoot.textContent = 'Minhas Noticias'

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

O código acima define uma classe TituloDinamico que estende a classe HTMLElement. Isso significa que TituloDinamico é um elemento personalizado que pode ser usado como um elemento HTML padrão.

No construtor da classe TituloDinamico, o método super() é chamado para invocar o construtor da classe pai HTMLElement. Em seguida, o método attachShadow é chamado no elemento atual (this) com a opção mode definida como "open". Isso cria um Shadow DOM para o elemento e retorna uma referência para a raiz do Shadow DOM.

Em seguida, um elemento ``<h1>`` é criado usando o método document.createElement e seu conteúdo de texto é definido como 'Minhas Noticias'. Esse elemento é adicionado à raiz do Shadow DOM usando o método appendChild.

Um elemento ``<style>`` também é criado e seu conteúdo de texto é definido com algumas regras CSS que definem a cor do texto de todos os elementos ``<h1>`` como vermelho e alinham o texto ao centro. Esse elemento também é adicionado à raiz do Shadow DOM usando o método appendChild.

Por fim, o método estático define da classe customElements é chamado com os argumentos 'titulo-dinamico' e TituloDinamico. Isso registra o elemento personalizado TituloDinamico com o nome de tag 'titulo-dinamico', permitindo que ele seja usado como um elemento HTML padrão com a tag ``<titulo-dinamico>``.

<br>

Após isto importamos e utilizamos nosso componente titulo-dinamico no documento HTML.
```
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Web Component</title>
    <!-- CSS -->
    <link rel="stylesheet" href="./styles/card.css">
    <!-- Importando components -->
    <script src="./src/components/CardNews.js" defer></script>
    <script src="./src/components/TituloDinamico.js" defer></script>
</head>
<body>
    <titulo-dinamico></titulo-dinamico>

    <div class="container">
        <div class="card">
            <div class="card__left">
                <span>Bruno Oliveira</span>
                <a href="#">Darth Vader Contrata Devs</a>
                <p>Darth Vader procura desenvolvedores que sabem trabalhar com componentes</p>
            </div>
            <div class="card__right">
                <img src="./images/asset-vader.png" alt="imagem do darth vader">
            </div>
        </div>
    </div>

    <card-news></card-news>
</body>
</html>
```

Todo o conteúdo está localizado na pasta ``web-component`` que pode ser acessada <a href="../web-component">clicando aqui</a>.